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

## Access

At the moment, the Sipp framework is only early access. You can [sign up](https://sipp.dev) or email us with your GitHub username to [hi@sipp.dev](mailto:hi@sipp.dev) in order to get early access and run this starter.

## Getting Started

Once you have access to the Sipp package, you'll need to follow these steps:

1. Authenticate to the GitHub npm registry.

You can follow [Github's directions](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) to do so.

You'll need a Personal Access Token linked to the account that has been added to the Sipp repository.

2. Install dependencies

Once you've authenticated to the GitHub package registry, `npm i` should work and the sipp framework and all dependencies should be installed.

3. Update the `.env`.

Copy the `.envexample` to the git-ignored `.env`. Update any values as needed.

4. Run migrations: `npx sipp migrate up`

The starter kit uses SQLite as the database driver and includes everything you need to get started locally. You database will be written out to `tmp/db.sqlite`.

5. Turn on the lights!

`npm run dev` will start a local development server on [localhost:3000](http://localhost:3000).

The dev build includes watching of your system for file changes and will rebuild and restart whenever you make a change.

## CLI

The CLI is small but growing. You can access help and commands with `npx sipp --help`

## Directory Structure

Here are the major pieces to be aware of:

```
./migrations - all your DB migrations.
./public - static assets like favicon.ico, CSS or JS
./tmp - temporary storage for development DB + logs
./app - all the app code
     index.ts - entry point
     config.ts - application config
     auth/* - authentication wiring
     middleware/* - any custom middleware
     controllers/*
     models/*
     view/*
```

## Bugs

Sipp is still in its alpha release, so you'll probably hit a bug.

When you do, please [file an issue](https://github.com/sjones6/sipp-starter/issues/new) with steps to reproduce.