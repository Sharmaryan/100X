import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET(){
    return NextResponse.json(comments)
}

export async function POST(request: NextRequest){
    const comment = await request.json()
    const newComment = {
        id: comments.length + 2,
        text: comment.text
    }
    comments.push(newComment)
    return NextResponse.json(comments)
}
