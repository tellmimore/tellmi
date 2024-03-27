import { FastifyInstance } from 'fastify';
import { PrismaClient} from '@prisma/client';

interface ParticipantData {
    participant_id: string;
    variant: string;
}

// Helper function to generate a random alphanumeric string, add to utils?
function generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export default async function participantRoutes(fastify: FastifyInstance, prisma: PrismaClient ) {
    // Create a new participant by studyname
    fastify.post('/participants/:studyName', async (request, reply) => {
        const participantData = request.body as ParticipantData; 
        const { studyName } = request.params as {studyName: string};

        // Generate a random standalone participant ID
        const standaloneParticipantId = generateRandomId(4);

        // Combine study name and standalone participant ID to form participant ID
        const participantId = `${studyName}:${standaloneParticipantId}`;
        participantData.participant_id = participantId;

        try {
            // Check if the participant ID already exists
            const existingParticipant = await prisma.participants.findUnique({
                where: {
                    participant_id: participantId
                }
            });

            if (existingParticipant) {
                reply.code(400).send({ error: `Participant ID '${participantId}' already exists` });
                return;
            }

            // Check if the study exists
            const existingStudy = await prisma.studies.findUnique({
                where: {
                    name: studyName
                }
            });

            if (!existingStudy) {
                reply.code(400).send({ error: `Study '${studyName}' does not exist` });
                return;
            }

            const newParticipant = await prisma.participants.create({
                data: participantData
            });
            return newParticipant;
        } catch (error) {
            console.error('Error creating participant:', error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}