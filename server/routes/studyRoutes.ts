import { FastifyInstance } from 'fastify';
import { PrismaClient} from '@prisma/client';

export default async function studyRoutes(fastify: FastifyInstance, prisma: PrismaClient ) {
    // Get study data by studyname
    fastify.get('/studies/:name', async (request, reply) => {
        const { name } = request.params as { name: string };
        try {
          const study = await prisma.studies.findFirst({
            where: {
              name: name
            }
          });
          if (study) {
            return study;
          } else {
            reply.code(404).send({ error: 'Study not found' });
          }
        } catch (error) {
          console.error('Error retrieving study:', error);
          reply.code(500).send({ error: 'Internal Server Error' });
        }
    });

    // Create a new study
    fastify.post('/studies', async (request, reply) => {
        try {
            const studyData = request.body as { 
              name: string;
              settings?: Record<string, any>;
              items?: Array<Record<string, any>>;
              variants?: Array<Record<string, any>>; 
            };
            const newStudy = await prisma.studies.create({
                data: {
                  name: studyData.name,
                  settings: studyData.settings,
                  items: studyData.items,
                  variants: studyData.variants,
                }
            });
            return newStudy;
        } catch (error) {
            console.error('Error creating study:', error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });

    // Registration
    fastify.post('/registration/:studycode', async (request, reply) => {
      const { studycode } = request.params as { studycode: string }
      try {
        // Check the Study Code
        const participant = await prisma.participants.findFirst({
          where: {
              participant_id: studycode
          }
        });
        if (participant) {
          // Find the study with the correct studyname
          const studyname = studycode.split(":")[0];
          const study = await prisma.studies.findFirst({
            where: {
              name: studyname
            }
          });
          if (study) {
            return study;
          } else {
            reply.code(404).send({ error: 'Study not found' });
          }

        } else {
          reply.code(404).send({ error: 'Study Code not valid' });
        }
      } catch (error) {
        console.error('Error creating study:', error);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
    })
}