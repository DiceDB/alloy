# Alloy

This is a [monorepo](https://monorepo.tools/) that contains all DiceDB related tools and applications that make it fun and easy to use in the real world - inspired by the word [alloy](https://en.wikipedia.org/wiki/Alloy).

## What's inside?

This monorepo includes the following packages/apps:

- `@dicedb/playground-web` @ [./apps/playground-web](./apps/playground-web): an interactive platform designed to let users experiment with [DiceDB](https://github.com/dicedb/dice/) commands in a live environment
- `@dicedb/ui` @ [./packages/ui](./packages/ui): common UI components for alloy apps packaged into a [internal package](https://turbo.build/repo/docs/core-concepts/internal-packages)

## Prerequisites

1. Install [nvm](https://github.com/nvm-sh/nvm)
2. Install node and yarn

```bash
nvm install 20.0.0
nvm use 20.0.0
corepack enable
```

## Installation

```bash
yarn install
```

> [!NOTE]
> Please go through the README of each package/app to understand how to run and develop them. The READMEs are located in the respective package/app directories. The information below is a quick reference to get you started common for all packages/apps.

## Develop

Please refer to the README of the specific app that you want to
develop and contribute to. You can find them under the `apps` directory.

## Build

To build all apps and packages, run the following command:

```bash
yarn build
```

## Build a specific package/app

To build a specific package/app, run the following command:

```bash
yarn build --filter @dicedb/playground-web
```

> Alternatively, you can also run `yarn build:playground` to build playground.

## Testing

To run tests for all apps and packages, run the following command:

```bash
yarn test
yarn test:watch  # Running test in watch mode
```

## Formatting

To format all apps and packages, run the following command:

```bash
yarn format
```

## Linting

To lint all apps and packages, run the following command:

```bash
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
