import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    const comment = comments.find(item => item.id === parseInt(id))
    if(parseInt(id) > comments.length){
        redirect('/comments')
    }
    if (!comment)
        return NextResponse.json({ msg: 'comment not found' })
    return NextResponse.json(comment)
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    const body = await request.json()
    const { text } = body
    const index = comments.findIndex(item => item.id === parseInt(id))
    comments[index].text = text
    return NextResponse.json(comments[index])
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    const comment = comments.filter(item => item.id !== parseInt(id))
    if (!comment)
        return NextResponse.json({ msg: 'comment not found' })
    return NextResponse.json({msg: 'updated list', comment})
}