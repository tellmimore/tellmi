---
sidebar-position: 1
---

# The Repository

The repository is set up as a monorepo, with 5 root-level directories:

1. `docs`: Contains the documentation for the project.
2. `mobile`: Contains the code for the cross-platform mobile app.
3. `server`: Contains the code for the server.
4. `web`: Contains the code for the web app.
5. `utils`: Contains the shared code between the mobile and web apps.

We use [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to manage the dependencies between the different packages in the monorepo. This allows us to easily share code between the different packages and manage the dependencies in a single place.

You can read more about why we decided to (a) use a monorepo and (b) use NPM workspaces in the [diary entry about the first decisions](/blog/first-decisions) section of the documentation.