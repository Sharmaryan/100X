import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const response = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName, lastName,
//         }
//     })
//     console.log(response)
// }

// insertUser('test2', 'test2', 'test2', 'test2')

// async function createTodo() {
//     const response = await prisma.todos.create({
//         data: {
//             userId: 1,
//             title: 'nothing',
//             description: 'nothing',
//             done: true
//         }
//     })
//     console.log(response)
// }

// createTodo()

async function getTodo() {
    const response = await prisma.todos.findMany({
        where: {
            userId: 1
        },
        select: {
           id: true,
           title: true,
           description: true,
           user: true
        }
    })
    console.log(response)
}

getTodo()