//back API RESTful
//localhost:3333
//importar os pacotes necessários
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

//criar aplicacao
const app = Fastify()
const prisma = new PrismaClient()


app.register(cors)//vai integrar

/*
*   método HTTP: Get, Post, Put, Patch, Delete
*/
//vamos acessar por essa rota os habitos do banco
//rotas
app.get('/hello',async() => {
    
    const habits = await prisma.habit.findMany({
        /*where:{
            title:{
                startsWith: 'Beber'
            }
        }    */        
    })
    return habits
})


//porta que vai ouvir
app.listen({
    port: 3333,
}).then(() => {
    console.log ('HTTP Server running!')
})
