export async function GET() {
  const body = "google-site-verification: google21d8d604931a0e3e.html"
  return new Response(body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}
