import { FastifyInstance } from 'fastify';
import { PrismaClient} from '@prisma/client';

export default async function resultRoutes(fastify: FastifyInstance, prisma: PrismaClient ) {
    // Get all results by participant id
    fastify.get('/results/:participant_id', async (request, reply) => {
        const { participant_id } = request.params as { participant_id: string };
        try {
            const results = await prisma.results.findMany({
                where: {
                    participant_id: participant_id
                }
            });
            return results;
        } catch (error) {
            console.error('Error retrieving results by participant_id:', error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });

    // Get all results by study name
    fastify.get('/study-results/:study_name', async (request, reply) => {
        const { study_name } = request.params as { study_name: string };
        try {
            const results = await prisma.results.findMany({
                where: {
                    participant_id: {
                        startsWith: `${study_name}:`
                    }
                }
            });
            return results;
        } catch (error) {
            console.error('Error retrieving results by study name:', error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });

    // Create a new result
    fastify.post('/results', async (request, reply) => {
        const resultData = request.body;
        try {
            const newResult = await prisma.results.create({
                data: resultData
            });
            return newResult;
        } catch (error) {
            console.error('Error creating result:', error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}