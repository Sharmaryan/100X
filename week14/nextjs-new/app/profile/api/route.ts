import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headersList = await headers()
    console.log(requestHeaders.get('Authorization'));
    console.log(headersList.get('Authorization'));
    return new Response("<h1>Profile API data</h1>", {
        headers:{
            "Content-Type": "text/html"
        }
    });
}