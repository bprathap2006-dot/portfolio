/**
 * Cloudflare Pages Function: /api/contact
 * Receives visitor contact submissions, logs user information,
 * and saves to Cloudflare KV / D1 or forwards email.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const payload = await request.json();
    const { name, email, subject, message } = payload;

    // Capture viewer metadata from Cloudflare Edge
    const viewerIp = request.headers.get("cf-connecting-ip") || "Unknown";
    const viewerCountry = request.headers.get("cf-ipcountry") || "Unknown";
    const timestamp = new Date().toISOString();

    const submissionData = {
      name,
      email,
      subject,
      message,
      metadata: {
        viewerIp,
        viewerCountry,
        timestamp
      }
    };

    // Store in Cloudflare KV if configured
    if (env && env.PORTFOLIO_KV) {
      const submissionId = `msg_${Date.now()}`;
      await env.PORTFOLIO_KV.put(submissionId, JSON.stringify(submissionData));
    }

    return new Response(
      JSON.stringify({
        status: "success",
        message: `Transmission accepted by Cloudflare Edge for ${name}`,
        submissionId: `MSG-${Date.now()}`
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Failed to parse transmission payload",
        error: err.message
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
