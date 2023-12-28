# Review AI Analyzer

## (WIP)

## Description

Welcome to the Review AI Analyzer! Share your product or topic reviews, and our AI will provide summaries of the good, bad, and areas for improvement.

[**Live Demo 🚀**](https://review-analyzer-ai-ifem.vercel.app/)

**Key Features:**

- Authentication.
- Create Entries/Topics for review.
- Create and delete Reviews about that entry/topic.
- When creating a new review, AI will automatically make a summary about good, bad and improvement points

## Technology

- NextJS;
- Typescript;
- Tailwind;
- Prisma;
- MySQL;
- PlanetScale;

## To Do:

- Add score input into review prompt;
- Add most used positive, bad, and improvements from each entry using memory model;
- Add chart to follow review progress along time;
- Complete test implementation

## Setup locally

Clone repository:

```bash
git clone https://github.com/dianacpg/review-analyzer-ai.git
```

Install dependencies:

```bash
npm i
```

Create Clerk account and add all secrets in .env.local:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=XXXXXXXX
CLERK_SECRET_KEY=XXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/entries
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user
```

Create OpenAI account and add secret in .env.local:

```
OPENAI_API_KEY=XXXXXXX
```

Database was created using [PlanetScale](https://planetscale.com/docs/prisma/prisma-quickstart), MySQL-compatible serverless database, that has a great developer experience. To do that, create an account, a database, install [planetscale CLI](https://github.com/planetscale/cli#installation) and connect by running:

```
pscale auth login

pscale connect <YOUR_DATABASE_NAME> <YOUR_BRANCH> — port 3309
```

,

Connect db with prisma by adding secret in .env as in [planetscale documentation](https://planetscale.com/docs/prisma/prisma-quickstart)

```
DATABASE_URL = 'mysql://root@127.0.0.1:3309/<YOUR_DATABASE_NAME>'
```

Run server

```bash
npm run dev
```
