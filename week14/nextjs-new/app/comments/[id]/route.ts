import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    const {id} = await params
    const comment = comments.find(item => item.id === parseInt(id))
    if(!comment)
    return NextResponse.json({msg:'comment not found'})
    return NextResponse.json(comment)
}