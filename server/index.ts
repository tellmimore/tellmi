import { add } from 'utils'

import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

fastify.get('/', function (request, reply) {
    reply.send({ hello: add(1, 2) })
})

fastify.listen({ port: 8080 }, function (err, address) {
    if (err) {
        fastify.log.error(`🔴 Error starting server.\n${err}`)
        process.exit(1)
    }

    console.log(`🟢 Server is now listening on ${address}`);
})