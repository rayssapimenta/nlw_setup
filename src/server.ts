//back API RESTful
//localhost:3333

import Fastify from 'fastify'

//criar aplicacao
const app = Fastify()
/*
*   método HTTP: Get, Post, Put, Patch, Delete
*/
//rotas
app.get('/',() => {
    return 'hello world'
})


//porta que vai ouvir
app.listen({
    port: 3333,
}).then(() => {
    console.log ('HTTP Server running!')
})
