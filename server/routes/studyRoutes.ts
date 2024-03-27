import { FastifyInstance } from 'fastify';
import { PrismaClient} from '@prisma/client';

export default async function studyRoutes(fastify: FastifyInstance, prisma: PrismaClient ) {
    // Get study by name
    fastify.get('/studies/:name', async (request, reply) => {
        const { name } = request.params as { name: string };
        try {
          const study = await prisma.studies.findUnique({
            where: {
              id: name
            }
          });
          console.log(name)
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
            const { name } = request.body as { name: string };
            const newStudy = await prisma.studies.create({
                data: {
                    name: name
                }
            });
            return newStudy;
        } catch (error) {
            console.error('Error creating study:', error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}