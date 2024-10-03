# DiceDB Playground Web

DiceDB Playground is an interactive platform designed to let users experiment with [DiceDB](https://github.com/dicedb/dice/) commands in a live environment, similar to the Go Playground.
Allows users to search and play with various DiceDB commands in real-time.

This repository hosts frontend service implementation of the Playground.

## Setup Using Docker

```
docker-compose up
```

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

## Environment Variables

Before running the project, make sure to set up the necessary environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:

````bash
# .env.local
NEXT_PUBLIC_PLAYGROUND_MONO_URL=http://localhost:8080/

## Development

To start the development server, run:

```bash
npm run dev
````

This will launch the app on [http://localhost:3000](http://localhost:3000). The app will automatically reload if you make changes to the code.

If you want to bring up backend and DiceDB for local end to end development, follow below steps:

1. Update `docker-compose.yml` file with below code:

```yml
version: "3.8"

services:
  dicedb:
    image: dicedb/dicedb:latest
    ports:
      - "7379:7379"

  backend:
    build:
      context: .
      dockerfile: Dockerfile_Backend
    ports:
      - "8080:8080"
    depends_on:
      - dicedb
    environment:
      - DICE_ADDR=dicedb:7379
```

2. Run below command to start backend server and DiceDB

```shell
docker-compose up
```

## Step-by-Step Setup for End-to-End Development with Docker

We have added `Dockerfile.dev` which is for development purposes, ensuring your Next.js application supports hot reloading and reflects code changes without requiring image rebuilds.

`docker-compose.dev.yml` configures Docker Compose to build and run your Next.js app in development mode.

```shell
docker-compose -f docker-compose.dev.yml up --build
```

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
