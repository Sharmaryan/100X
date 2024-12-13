import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {
                    label: "Username", type: "text", placeholder: "Email"
                },
                password: {
                    label: "Password", type: "password", placeholder: "Password"
                },
            },
            async authorize(credentials: any) {
                return {
                    id: 'some1',
                    username: 'aryan sharma',
                    email: 'aryan@gmail.com',
                }
            },
        })
    ],
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.uid
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}