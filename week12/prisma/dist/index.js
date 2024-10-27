"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function createTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todos.create({
            data: {
                userId: 1,
                title: 'nothing',
                description: 'nothing',
                done: true
            }
        });
        console.log(response);
    });
}
createTodo();
