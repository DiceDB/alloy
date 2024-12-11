# Alloy

This is a [monorepo](https://monorepo.tools/) that contains all dicedb related tools and applications that make it fun and easy to use in the real world.

## Why a Monorepo?

A monorepo is a single repository that contains multiple projects. This allows us to manage all the projects in a single repository, making it easier to share code and manage dependencies across projects.

## Why Alloy?

This repository is an amalgamation of all the tools and applications that make DiceDB fun and easy to use in the real world. The name is a nod to this amalgamation, and inspired by the [alloy](https://en.wikipedia.org/wiki/Alloy).


## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `@dicedb/playground-web` @ [./apps/playground-web](./apps/playground-web): an interactive platform designed to let users experiment with [DiceDB](https://github.com/dicedb/dice/) commands in a live environment, similar to the Go Playground
- `@dicedb/ui` @ [./packages/ui](./packages/ui): common UI components for alloy apps packaged into a [internal package](https://turbo.build/repo/docs/core-concepts/internal-packages)

### Configurations

- `@dicedb/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@dicedb/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@dicedb/tailwind-config`: `tailwind.config.js`s used throughout the monorepo

### Prerequisites

Ensure you have `nvm` installed. If not, run the following command

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
```

Ensure you have the following installed:

- node.js (v18.17.0 or later)
- yarn (v4.5.1)

```bash
nvm install 20.0.0
nvm use 20.0.0
```

```bash
corepack enable
```

> If you're unfamiliar with yarn, it’s an alternative package manager that is faster and more efficient than npm. Learn more about yarn [here](https://yarnpkg.com/getting-started).



### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd alloy
yarn install
```

> [!NOTE]
> Please go through the README of each package/app to understand how to run and develop them. The READMEs are located in the respective package/app directories. The information below is a quick reference to get you started common for all packages/apps.

### Build

To build all apps and packages, run the following command:

```
cd alloy
yarn build
```

#### Build a specific package/app

To build a specific package/app, run the following command:

```
cd alloy
yarn build --filter @dicedb/playground-web
```

These commands will not only build the package requested but also build all the dependencies of the package requested.

> We also have a `yarn build:playground` alias that does the same thing as `yarn build --filter @dicedb/playground-web` for convenience.

### Develop

To develop all apps and packages, run the following command:

```
cd alloy
yarn dev
```

#### Develop a specific package/app

To develop a specific package/app, run the following command:

```
cd alloy
yarn dev --filter @dicedb/playground-web
```

These commands will not only start the development server for the package requested but also start the development server for all the dependencies of the package requested.

> We also have a `yarn dev:playground` alias that does the same thing as `yarn dev --filter @dicedb/playground-web` for convenience.


### Testing

To run tests for all apps and packages, run the following command:

```
cd alloy
yarn test
```

#### Test in Watch Mode

To run tests in watch mode for all apps and packages, run the following command:

```
cd alloy
yarn test:watch
```



### Formatting

To format all apps and packages, run the following command:

```
cd alloy
yarn format
```

### Linting

To lint all apps and packages, run the following command:

```
cd alloy
yarn lint
```

## The Monorepo Structure

The monorepo is divided into 3 main directories:
- `apps`: contains all the applications i.e. deployable units
- `packages`: contains all the packages i.e. reusable code across the apps
- `tooling`: contains all the configurations and tooling used across the monorepo

## How to Contribute

The Code Contribution Guidelines are published at [CONTRIBUTING.md](CONTRIBUTING.md); please read them before you start making any changes. This will ensure a consistent standard of coding practices and developer experience.

Contributors can join the [Discord Server](https://discord.gg/6r8uXWtXh7) for quick collaboration.

## Contributors

<a href = "https://github.com/dicedb/playground-web/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=dicedb/playground-web"/>
</a>
