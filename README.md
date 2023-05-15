# nextjs-app-router-authjs-graphql-nexus

Next.js(App Router) boilerplate.

## Stack

* TypeScript
* Next.js
* NextAuth.js
* Prisma
* MySQL
* GraphQL
* Nexus
* Apollo Client
* Apollo Server

## Usage

### install & setup

```
// install
npm i

// set up prisma
npx prisma db push

// create graphql schema
npm run build:nexus-typegen
```

### start

```
npm run dev
```

### other command

```
// Database reset & Prisma rebuild
npm run reset

// lint & Prisma format & prettier
npm run format
```