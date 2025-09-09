# QR Studio (QR code SaaS)

Modern QR code generator with tiered pricing, authentication, and a protected dashboard.

## Getting started

1. Copy envs

```bash
cp .env.example .env
```

2. Install dependencies

```bash
npm install
```

3. Initialize database and generate Prisma client

```bash
npx prisma db push
```

4. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Features

- Authentication (email/password) with NextAuth Credentials
- Registration endpoint and pages
- Protected dashboard via middleware
- QR builder (PNG export) with colors and sizing
- Pricing page with Free/Pro/Business tiers

## Roadmap

- Stripe checkout for paid plans
- QR analytics and project management
