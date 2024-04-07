import 'dotenv/config';

import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client';

import studyRoutes from './routes/studyRoutes.js'
import resultRoutes from './routes/resultRoutes.js';
import participantRoutes from './routes/participantRoutes.js';

const fastify = Fastify({
    logger: true
})
const prisma = new PrismaClient();

// Hello Server
fastify.get('/', function (req, res) {
    res.send({ hello: 'world' })
})

// Register Routes
fastify.register(studyRoutes, prisma);
fastify.register(resultRoutes, prisma);
fastify.register(participantRoutes, prisma);

// Start the Server
fastify.listen({ port: 8080 }, function (err, address) {
    if (err) {
        fastify.log.error(`🔴 Error starting server.\n${err}`)
        process.exit(1)
    }

    console.log(`🟢 Server is now listening on ${address}`);
})