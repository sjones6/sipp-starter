# sipp-starter

An starter repo for Sipp: https://sipp.dev

## Features

This starter kit includes the following

* Local authentication with Passport
* Authentication hooks
* User Model
* Example Migration + DB in SQLite
* Template scaffolding in JSX
* Form components in JSX
* Styling with TailwindCSS

## Getting Started

Once you have access to the Sipp package, you'll need to follow these steps:

1. Install dependencies

Once you've authenticated to the GitHub package registry, `npm i` should work and the sipp framework and all dependencies should be installed.

2. Update the `.env`.

Copy the `.envexample` to the git-ignored `.env`. Update any values as needed.

3. Do an initial build: `npm run build`

This is required in order to run migrations (next step).

4. Run migrations: `npx knex migrate:latest`

The starter kit uses SQLite as the database driver and includes everything you need to get started locally. You database will be written out to `tmp/db.sqlite`.

Optional: you can run `npx knex seed:run` to input some initial users and posts.

5. Turn on the lights!

`npm run dev` will start a local development server on [localhost:3000](http://localhost:3000).

The dev build includes watching of your system for file changes and will rebuild and restart whenever you make a change.

## Directory Structure

Here are the major pieces to be aware of:

```
./app - all the app code
    index.ts - entry point
    config.ts - application config
    auth/* - authentication wiring
    middleware/* - any custom middleware
    controllers/* - controllers + local views
    models/* - DB-backed models
    view/* - global view templates + components
./db/ - all your DB migrations.
    migrations - all your DB migrations.
    seeds - all your DB seeds.
    knexfile.ts - DB config
./public - static assets like favicon.ico, CSS or JS
./tmp - temporary storage for development DB + logs
```

## Bugs

Sipp is still in its alpha release, so you'll probably hit a bug.

When you do, please [file an issue](https://github.com/sjones6/sipp-starter/issues/new) with steps to reproduce.