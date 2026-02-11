# MCP TypeScript Template

A modern, production-ready TypeScript template for building Model Context Protocol (MCP) servers with HTTP transport, structured logging, and comprehensive tooling.

---

## Features

- HTTP transport using Express and StreamableHTTPServerTransport
- Structured logging with Pino (OpenTelemetry ready)
- Type-safe configuration with Zod validation
- Strict TypeScript configuration
- Fast build system powered by Vite
- Modern testing using Vitest
- Docker-ready production setup
- Example tools included
- Hot reload and developer-friendly workflow

---

## Prerequisites

- Node.js >= 22.18.0 (native TypeScript support)
- npm (latest recommended)

---

## Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mcp-typescript-template

2. Install Dependencies

npm install

3. Run in Development Mode

npm run dev

Server runs at:

http://localhost:3000

4. Build for Production

npm run build

5. Start Production Server

npm start

Available Scripts
Command	Description
npm run dev	Start development server with hot reload
npm run build	Build production bundle
npm start	Start production server
npm test	Run tests (watch mode)
npm run test:ci	Run tests once (CI mode)
npm run lint	Run ESLint
npm run lint:fix	Fix lint issues
npm run format	Format code
npm run format:check	Check formatting
Available MCP Tools
1. Echo Tool

Echoes back a provided message.

Parameters:

    message (string, required)

Example:

{
  "message": "Hello, MCP!"
}

2. Generate Movie Story Tool

Generates a random movie story idea.

Example response:

{
  "genre": "Sci-Fi",
  "protagonist": "A skeptical scientist",
  "goal": "to prevent a global catastrophe",
  "obstacle": "a relentless assassin",
  "logline": "In a Sci-Fi world, a skeptical scientist must prevent a global catastrophe while facing a relentless assassin."
}

Project Structure

mcp-typescript-template/
├── src/
│   ├── index.ts
│   ├── config.ts
│   ├── logger.ts
│   └── lib/
│       ├── utils.ts
│       ├── utils.test.ts
│       └── movieStoryGenerator.ts
├── dist/
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── Dockerfile
├── package.json
└── .github/

Configuration

Environment variables are validated using Zod.
Variable	Default	Description
PORT	3000	Server port
NODE_ENV	development	Environment mode
SERVER_NAME	mcp-typescript-template	MCP server name
SERVER_VERSION	1.0.0	Server version
LOG_LEVEL	info	Logging level
Example .env

PORT=3000
NODE_ENV=development
SERVER_NAME=my-mcp-server
SERVER_VERSION=1.0.0
LOG_LEVEL=debug

Architecture
HTTP Transport

    Express server

    StreamableHTTPServerTransport

    Session management

    MCP protocol initialization

    Proper MCP error formatting

Structured Logging

    Pino logger

    JSON logs in production

    Pretty logs in development

    OpenTelemetry trace correlation support

Configuration Management

    Validated at startup with Zod

    Centralized in config.ts

    Immutable configuration after initialization

Adding a New Tool

Register a tool inside src/index.ts:

import { z } from "zod";
import { createTextResult } from "./lib/utils.js";

server.registerTool(
  "my_tool",
  {
    title: "My Custom Tool",
    description: "Description of what this tool does",
    inputSchema: {
      param1: z.string(),
      param2: z.number().optional(),
    },
  },
  async (args) => {
    const result = await myCustomLogic(args.param1, args.param2);
    return createTextResult(result);
  }
);

Create logic:

export async function myCustomLogic(param1: string, param2?: number) {
  return {
    result: `Processed: ${param1}`,
    count: param2 || 0
  };
}

Docker Deployment
Build Image

docker build -t my-mcp-server .

Run Container

docker run -p 3000:3000 my-mcp-server

Docker Compose

version: "3.8"

services:
  mcp-server:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - NODE_ENV=production
      - SERVER_NAME=my-mcp-server
      - SERVER_VERSION=1.0.0
      - LOG_LEVEL=info

Run:

docker-compose up --build

Testing

Run tests:

npm test

CI mode:

npm run test:ci

Code Quality
Lint

npm run lint
npm run lint:fix

Format

npm run format
npm run format:check

Contributing

    Fork repository

    Create branch

    Run tests and lint

    Submit pull request

License

MIT License
Resources
