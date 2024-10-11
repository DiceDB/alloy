# DiceDB Playground Web

DiceDB Playground is an interactive platform designed to let users experiment with [DiceDB](https://github.com/dicedb/dice/) commands in a live environment, similar to the Go Playground. It allows users to search and play with various DiceDB commands in real-time.

This repository hosts the frontend service implementation of the Playground.

## Setup Using Docker

To start the playground using Docker, run:

```bash
docker-compose up
```

## Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd apps/playground-web
pnpm install
```

## Environment Variables

Before running the project, make sure to set up the necessary environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:
NEXT_PUBLIC_PLAYGROUND_MONO_URL=http://localhost:8080/

## Development

To start the development server, run:

```bash
pnpm run dev
```

This will launch the app on [http://localhost:3000](http://localhost:3000). The app will automatically reload if you make changes to the code.

### Setting Up Backend and DiceDB for Local Development

1. Update `docker-compose.yml` file with the following code:

```yaml
version: '3.8'

services:
  dicedb:
    image: dicedb/dicedb:latest
    ports:
      - '7379:7379'

  backend:
    build:
      context: .
      dockerfile: Dockerfile_Backend
    ports:
      - '8080:8080'
    depends_on:
      - dicedb
    environment:
      - DICE_ADDR=dicedb:7379
```

2. Run the following command to start the backend server and DiceDB:

```bash
docker-compose up
```

## Step-by-Step Setup for End-to-End Development with Docker

We have added `Dockerfile.dev`, which is for development purposes, ensuring your Next.js application supports hot reloading and reflects code changes without requiring image rebuilds.

`docker-compose.dev.yml` configures Docker Compose to build and run your Next.js app in development mode.

To build and run the development mode:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Prettier Scripts

To ensure consistent code formatting, we use Prettier. It runs automatically as part of the GitHub workflow, but in case of a workflow failure, you can run Prettier manually.

### Running Prettier Locally

To run Prettier and fix formatting issues locally:

```bash
pnpm run prettier:format
```

This command will format all `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, and `.css` files.

To check for any formatting issues without fixing them:

```bash
npm run prettier:check
```

## Creating a Static Production Build

To generate a static production build of your Next.js application, follow these steps:

1. **Configure Output Setting:**  
   Ensure that you have the following line in your `next.config.mjs` file:

   ```javascript
   output: 'export'
   ```
2. **Build the Project:**

   Run the following command in your terminal:

   ```bash
   npm run build
   ```
3. **Testing static build locally:**
   ```bash
   npx serve@latest out
   ```

## Building for Production

To create a production build:

```bash
pnpm run build
```

After the build is complete, you can start the production server with:

```bash
pnpm run start
```

## Running the Test Cases

To run the test cases, execute the following command:

```bash
pnpm run test
```

To execute the test cases simultaneously as you make changes to the files, execute the following command:

```bash
pnpm run test:watch
```

To get the test coverage of the project, execute the following command:

```bash
pnpm run test:coverage
```

## Project Structure

The main components of the DiceDB Playground include:

- **Terminal Component**: A basic terminal interface for interacting with DiceDB commands.
- **Search Component**: Allows searching through mock commands or documentation.

Feel free to extend or modify the components to suit your needs.

## How to Contribute

The Code Contribution Guidelines are published at [CONTRIBUTING.md](CONTRIBUTING.md); please read them before you start making any changes. This will ensure a consistent standard of coding practices and developer experience.

Contributors can join the [Discord Server](https://discord.gg/6r8uXWtXh7) for quick collaboration.

## Contributors

<a href = "https://github.com/dicedb/dice/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=dicedb/dice"/>
</a>
