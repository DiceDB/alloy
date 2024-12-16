# Playground Web

DiceDB Playground is an interactive platform designed to let users experiment with [DiceDB](https://github.com/dicedb/dice/) commands in a live environment. This repository hosts the frontend service implementation of the Playground.

## Installation

Clone the repository and install the dependencies:

```bash
cd apps/playground-web
yarn install
```

## Development

### Pre-requisite

Playground-web depends on `playground-mono` which is the backend.
Please set up the [`playground-mono` repository](https://github.com/dicedb/playground-mono) locally by following the instructions
mentioned in the [`README.md`](https://github.com/DiceDB/playground-mono/blob/master/README.md) file.

### Starting the development server

To start the development server, run:

```bash
yarn run dev
```

This will launch the app on [http://localhost:3000](http://localhost:3000). The app will automatically reload if you make changes to the code.
