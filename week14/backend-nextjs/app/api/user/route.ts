import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();

export async function GET(req: NextRequest) {
    const user = await client.user.findFirst()

    return NextResponse.json({ email: user?.username, name: 'aryan' })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });
        return NextResponse.json({ message: "Signed up" });
    } catch (err) {
        return NextResponse.json({ message: 'error while signing up' }, { status: 411 });
    }
}
