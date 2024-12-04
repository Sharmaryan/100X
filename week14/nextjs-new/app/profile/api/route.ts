import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headersList = await headers()
    const theme = request.cookies.get('theme')
    ;(await cookies()).set('resultsPerPage','20')
    console.log((await cookies()).get('resultsPerPage'))
    console.log(theme)
    console.log(requestHeaders.get('Authorization'));
    console.log(headersList.get('Authorization'));

    return new Response("<h1>Profile API data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}