# TRPC - Typescript Remote Procedure Call

### What is RPC

RPC is protocol/mechanism used in distributed computing that allows one program to execute a program or subroutine on a differect addess or computer.

This allows a client to call a server function directly

## Benefits

1. Synchronized Typescript types
   With TRPC you can be sure that both your front end and backend expect the same data types and are always in sync without ugly dependencies and abstraction breaks

2. No need for HTTP verb handler

## Getting started

### 1. Procedures

Procedures are functions on the backend. They can be `queries`, `mutations`, or `subscriptions`.

- `Query` - used to fetch data, generally does not change any data
- `Mutation` - used to send data, often for create/update/delete purposes
- `Subscription` - you might not need this, and we have dedicated documentation

Procedures are contained inside Routers.

### 2. Server

TRPC needs a webserver to serve requests. You can use a vanilla Node server or integrate with you webserver of choce i.e Express, fastify, Next.js, the Fetch API

### Basic syntax

Server

```js
import { publicProcedure, router } from './trpc';

const appRouter = router({
    users: publicProcedure.query(async () => {
        const users = await db.users.findMany();
        return users;
    }),
    user: publicProcedure.input(z.number()).query(async () => {
        const { input } = opts;
        return db.users.findUnique(input);)
},
    userCreate: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(async (opts) => {
            const { input } = opts;
            //      ^?
            // Create a new user in the database
            const user = await db.user.create(input);
            //    ^?
            return user;
        }));

export type AppRouter = typeOf appRouter;

const server = createHTTPServer({
    router: appRouter,
});

server.listen(3000);
```

Syntax

- router() with param objects{} containing procedures as attributes
- `procuedureName`: `publicProcedure.query(()=>{})` :: procedures with no userInput
- `procuedureName`: `publicProcedure..input(typeDef).query((opts)=>{})` :: procedures with userInput. The `input` will be contained in the `params` passed to the query

### client

```js
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';  //import Backend typedef

const trpc = createTRPCProxyClient < AppRouter > ({
    links: [
        ({
            httpBatchLink
      url: 'http://localhost:3000',
        }),
    ],
});

async function main() {

    const users = await trpc.users.query();
    console.log('Users:', users);

    const user = await trpc.users.query(1);
    console.log('Users:', users);

    const createdUser = await trpc.userCreate.mutate({ name: 'sachinraja' });
    console.log('Created user:', createdUser);
}
```
