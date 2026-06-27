export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    if (!payload || !payload.leadDetails || !payload.roiResult) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!webhookResponse.ok) {
        const text = await webhookResponse.text();
        console.error("Webhook failed:", webhookResponse.status, text);
        return res.status(502).json({ error: "Webhook failed" });
      }
    } else {
      console.log("ROI lead captured without webhook:", JSON.stringify(payload, null, 2));
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Lead handler error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
