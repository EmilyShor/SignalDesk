# SignalDesk

**Less noise. More progress.** A full-stack issue tracker with a calm aubergine, violet, and mint visual identity.

Maintained by **Emily Shor**.

## Features and stack

- Issue creation, editing, deletion, assignment, search, and status tracking.
- Credentials authentication and protected application routes.
- Dashboard totals, recent issues, and status summaries.
- Next.js App Router, React, TypeScript, HeroUI, Tailwind CSS, NextAuth, Prisma, and MySQL.

## Local setup

Requires Node.js 20.19 or newer, pnpm, and MySQL 8. Create an empty `signaldesk` database and a database user before running the migrations.

```bash
git clone https://github.com/EmilyShor/SignalDesk.git
cd SignalDesk
pnpm install
cp .env.example .env
```

Set `DATABASE_URL` to your MySQL connection string and replace `NEXTAUTH_SECRET` with a locally generated secret (`openssl rand -base64 32`). Never commit your `.env` file.

```bash
pnpm db:generate
pnpm db:migrate
pnpm dev
```

Open [localhost:3000](http://localhost:3000) and create an account. The app requires a configured MySQL database for registration, authentication, and issue data.

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Branding

The color palette and HeroUI tokens live in `tailwind.config.ts`. The shared logo is in `app/components/Brand.tsx`; `app/icon.svg` provides the matching browser icon. The design uses system fonts and does not require downloading Google Fonts.

## SignalDesk development

- New SignalDesk identity, pulse logo, browser icon, page title, and product copy.
- A shared violet HeroUI theme, mint accents, and warm light backgrounds.
- A redesigned dashboard header and coordinated sign-in and registration layouts.
- A shared brand component and an environment template for local setup.
- Next.js 15.5.28, a corrected route export, a MySQL migration case fix, and restricted assignee fields in issue responses.

## Credits

SignalDesk builds on [ZeroBug](https://github.com/RoyNaor/ZeroBug) by Roy Naor and its contributors. Original commit authorship is preserved. The SignalDesk identity, visual customization, and changes listed above are maintained by Emily Shor.

The upstream snapshot does not include a license file; this repository does not add a new license.
