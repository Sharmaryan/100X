export async function GET() {
    return new Response(JSON.stringify({ name: "aryan", email: "aryan@gmail.com" }));
}
