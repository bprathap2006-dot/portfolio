/**
 * Cloudflare Pages Function: /api/views
 * Handles visitor count tracking and viewer telemetry at the Cloudflare Edge.
 */

export async function onRequestGet(context) {
  const { request, env } = context;

  // Extract viewer telemetry headers provided by Cloudflare Edge
  const clientIp = request.headers.get("cf-connecting-ip") || "127.0.0.1";
  const country = request.headers.get("cf-ipcountry") || "LOCAL";
  const city = request.cf?.city || "Unknown City";
  const userAgent = request.headers.get("user-agent") || "Unknown";

  let viewsCount = 1420; // Default baseline

  // If Cloudflare KV or D1 binding exists (e.g. env.PORTFOLIO_KV), increment real persistent count
  if (env && env.PORTFOLIO_KV) {
    try {
      const current = await env.PORTFOLIO_KV.get("views_count");
      viewsCount = current ? parseInt(current, 10) + 1 : viewsCount + 1;
      await env.PORTFOLIO_KV.put("views_count", viewsCount.toString());
    } catch (err) {
      // Fallback to baseline
    }
  }

  const responseData = {
    status: "success",
    views: viewsCount,
    viewer: {
      ip: clientIp,
      country: country,
      city: city,
      timestamp: new Date().toISOString(),
      userAgent: userAgent.substring(0, 50) + "..."
    }
  };

  return new Response(JSON.stringify(responseData), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache"
    }
  });
}
