DiceDB Playground Web
===

DiceDB Playground is an interactive platform designed to let users experiment with [DiceDB](https://github.com/dicedb/dice/) commands in a live environment, similar to the Go Playground.
Allows users to search and play with various DiceDB commands in real-time.

This repository hosts frontend service implementation of the Playground.

## Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.x or later)
- **Yarn** (or npm)
- **Next.js** (v13.x or later)

## Installation
Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd playground-web
npm install
```

## Development

To start the development server, run:

```bash
npm run dev
```

This will launch the app on [http://localhost:3000](http://localhost:3000). The app will automatically reload if you make changes to the code.

## Building for Production

To create a production build:

```bash
npm run build
```

After the build is complete, you can start the production server with:

```bash
npm run start
```

## Project Structure

The main components of the DiceDB Playground include:
- **Terminal Component**: A basic terminal interface for interacting with DiceDB commands.
- **Search Component**: Allows searching through mock commands or documentation.

Feel free to extend or modify the components to suit your needs.

## How to contribute

The Code Contribution Guidelines are published at [CONTRIBUTING.md](CONTRIBUTING.md); please read them before you start making any changes. This would allow us to have a consistent standard of coding practices and developer experience.

Contributors can join the [Discord Server](https://discord.gg/6r8uXWtXh7) for quick collaboration.
