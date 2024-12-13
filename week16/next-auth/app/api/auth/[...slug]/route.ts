import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { slug: string[] } }) {
    const { slug } = await params
    console.log(slug)
    return NextResponse.json({ msg: 'hey' })
}