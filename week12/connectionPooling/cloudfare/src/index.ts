import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
	DATABASE_URL: string
}

export default {
	async fetch(request, env: Env, ctx): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL
		}).$extends(withAccelerate())

		const response = await prisma.log.create({
			data: {
				level: 'Info',
				message: `${request.method} ${request.url}`,
				meta: {
					headers: JSON.stringify(request.headers)
				}
			}
		})
		console.log(JSON.stringify(response))
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
