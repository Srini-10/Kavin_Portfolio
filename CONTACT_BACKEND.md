# Contact Form Backend — Next.js API Route (Vercel)

The portfolio's contact form posts to a same-origin API route that emails you (and
auto-replies to the visitor) via Gmail + Nodemailer. No separate backend, no CORS,
and it runs free on Vercel's Hobby tier.

## How it works

```
components/sections/15_ContactForm.tsx   ──POST /api/contact──▶  app/api/contact/route.ts
                                                                        │
                                                    lib/contact/emailTemplates.ts (HTML emails)
                                                                        │
                                                       Nodemailer → Gmail SMTP → inbox
```

- **[app/api/contact/route.ts](app/api/contact/route.ts)** — validates & sanitises input,
  rate-limits per IP, honeypot, sends admin notification + visitor auto-reply.
- **[lib/contact/emailTemplates.ts](lib/contact/emailTemplates.ts)** — the two branded,
  responsive HTML emails. All branding lives in the `BRAND` object at the top.
- **[components/sections/15_ContactForm.tsx](components/sections/15_ContactForm.tsx)** —
  posts to `/api/contact` (same origin), shows loading + success/error states.

## Environment variables

Set these **server-side** (no `NEXT_PUBLIC_` prefix, so they never reach the browser).

| Variable            | Required | Notes                                             |
| ------------------- | -------- | ------------------------------------------------- |
| `EMAIL_USER`        | ✅       | Gmail address that sends the mail                 |
| `EMAIL_PASS`        | ✅       | Gmail **App Password** (16 chars), not your login |
| `CONTACT_RECIPIENT` | –        | Where admin notifications go (defaults to `EMAIL_USER`) |
| `BRAND_NAME`        | –        | Display name in the "from" + templates            |

- **Local dev:** put them in `.env.local` (git-ignored). See `.env.local.example`.
- **Production:** add them in Vercel → **Project → Settings → Environment Variables**,
  then redeploy. (`.env.local` is NOT uploaded to Vercel.)

## Run locally

```bash
npm install
# ensure .env.local exists (copy from .env.local.example and fill in)
npm run dev
# open http://localhost:3000 and submit the contact form
```

## Deploy to Vercel

**Option A — Git (recommended, gives auto-deploys):**
1. Push this repo to GitHub.
2. In the Vercel dashboard: **Add New → Project → import the repo** (framework auto-detected as Next.js).
3. Add the env vars above under **Settings → Environment Variables**.
4. Deploy. Every future `git push` redeploys automatically.

**Option B — Vercel CLI:**
```bash
vercel link          # link this folder to a Vercel project
# add env vars for production:
printf '%s' 'kavinkumars827@gmail.com' | vercel env add EMAIL_USER production
printf '%s' '<app-password>'           | vercel env add EMAIL_PASS production
printf '%s' 'kavinkumars773@gmail.com' | vercel env add CONTACT_RECIPIENT production
printf '%s' 'Kavinkumar S.'            | vercel env add BRAND_NAME production
vercel --prod        # deploy to production
```

The form calls `/api/contact` on the same origin, so it works automatically once
deployed — no endpoint URL to configure.

## Notes

- **Gmail limits:** ~500 emails/day — plenty for a portfolio. A brand-new sending
  account may land in Spam until it builds reputation; if that's an issue, send from
  an established address or switch to an HTTP email API (e.g. Resend).
- **Spam defenses:** honeypot + per-IP in-memory rate limit (5 / 10 min). For heavy
  abuse, add a captcha (Cloudflare Turnstile / reCAPTCHA) and verify its token in the
  route. In-memory limits are per serverless instance (a speed bump, not a hard cap).
- The earlier Firebase approach (`functions/`, `firebase.json`, `.firebaserc`) has
  been removed — this Next.js/Vercel route fully replaces it.
