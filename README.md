# Genex ROI Calculator - Vercel Project

This is a standalone Vercel landing page for the Genex Warehouse ROI Calculator.

## Files

- `public/index.html` - the calculator landing page
- `api/lead.js` - serverless lead capture endpoint
- `vercel.json` - Vercel configuration
- `package.json` - project metadata

## Deploy to Vercel

1. Create a new GitHub repository and upload these files.
2. In Vercel, create a new project from that repository.
3. Deploy.
4. Add a custom domain such as `roi.genexmh.com` in Project Settings > Domains.
5. In Hostinger DNS, add the CNAME record Vercel asks for.

## Lead capture

In Vercel Project Settings > Environment Variables, add:

`LEAD_WEBHOOK_URL`

Set it to your Make, Zapier, HubSpot or other webhook URL.

The browser posts to `/api/lead`. The serverless function then sends the payload to the webhook URL, keeping the webhook private.
