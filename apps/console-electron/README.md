# Console

DiceDB Console is a management tool for DiceDB. It is a desktop application that allows you to manage your DiceDB instances, run load tests, view results, and manage observability. It will also enable you to prototype your queries before you include it in your apps.


> [!CAUTION]
> DiceDB Console is currently in active development. Please report any issues you encounter.

## Development

### Install

To install DiceDB Console, run the following command:

```bash
cd alloy
yarn install
```

### Develop

To develop DiceDB Console, run the following command:

```bash
cd alloy
yarn dev:console
```

### Build

To build DiceDB Console, run the following command:

```bash
cd alloy
yarn build:console
```


### Architecture

DiceDB Console is built using [Electron](https://www.electronjs.org/), [Next.js](https://nextjs.org/), and [React](https://reactjs.org/). It uses [TypeScript](https://www.typescriptlang.org/) for type safety and [Jest](https://jestjs.io/) for testing.

The nextjs frontend is used as the renderer process and the electron main process spawns the nextjs server. The main process also communicates with the renderer process using IPC.

This enables us to develop the app as if it's just a mordern NextJS 14 app, with both client and server features, and also have the power of Electron to access the file system, spawn processes, etc.

