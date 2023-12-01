import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/libs/prisma";
import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
    providers: [
    EmailProvider({
        server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
        },
        from: process.env.EMAIL_FROM,
    }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async authorize() {
            const allowedEmails = [
                "al21760482@ite.edu.mx",
                "alc17760295@ite.edu.mx",
                "juliorga7@gmail.com"
            ];

            const user = { email: credentials.email }; // Replace with your user object

            if (allowedEmails.includes(user.email)) {
                return Promise.resolve(user);
            } else {
            // If the email is not allowed, return null
                return Promise.resolve(null);
                console.log("usuario no autorizado");
            }
        },
    },
});

export { handler as GET, handler as POST };