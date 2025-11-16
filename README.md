# MCP TypeScript Template# MCP TypeScript Template



A modern, production-ready TypeScript template for building Model Context Protocol (MCP) servers with HTTP transport, structured logging, and comprehensive tooling.# MCP TypeScript Template



##  FeaturesA modern, production-ready TypeScript template for building Model Context Protocol (MCP) servers with HTTP transport, structured logging, and comprehensive tooling.



- ** HTTP Transport**: Express-based MCP server with session management##  Features

- ** Structured Logging**: Pino logger with OpenTelemetry correlation support

- ** Type-safe Configuration**: Environment variables validated with Zod schemas
  
- ** HTTP Transport**: Express-based MCP server with session management

- ** Fast Build System**: Vite for lightning-fast ES module builds- ** Structured Logging**: Pino logger with OpenTelemetry correlation support

- ** Modern Testing**: Vitest for unit and integration testing- ** Type-safe Configuration**: Environment variables validated with Zod schemas

- ** TypeScript Strict Mode**: Full type safety with modern TypeScript- ** Fast Build System**: Vite for lightning-fast ES module builds

- ** Developer Experience**: Hot reload, linting, formatting, and more- ** Modern Testing**: Vitest for unit and integration testing

- ** Docker Ready**: Production-optimized Dockerfile included- ** TypeScript Strict Mode**: Full type safety with modern TypeScript

- ** Example Tools**: Pre-built tools to get started quickly- ** Developer Experience**: Hot reload, linting, formatting, and more

- ** Docker Ready**: Production-optimized Dockerfile included

##   Prerequisites- ** Example Tools**: Pre-built tools to get started quickly



- **Node.js**: >= 22.18.0 (uses native TypeScript type stripping)## Features

- **npm**: Latest version recommended

This template provides:

##  Quick Start

- **TypeScript** - Full TypeScript support with strict configuration

### 1. Clone or Use This Template- **Vite** - Fast build system with ES modules output

- **Express** - Fast, unopinionated web framework for HTTP server

```bash- **ESLint + Prettier** - Code quality and formatting

git clone <your-repo-url>- **Docker** - Containerization support

cd mcp-typescript-template- **Example Tool** - Simple echo tool to demonstrate MCP tool implementation

```

## Getting Started

### 2. Install Dependencies

1. **Clone or use this template**

```bash

npm install   ```bash

```   git clone <your-repo-url>

   cd mcp-typescript-template

### 3. Run in Development Mode   ```



```bash2. **Install dependencies**

npm run dev

```   ```bash

   npm install

The server will start with hot-reload enabled at `http://localhost:3000`.   ```



### 4. Build for Production3. **Build the project**



```bash   ```bash

npm run build   npm run build

```   ```



### 5. Start Production Server4. **Start the server**

   ```bash

```bash   npm start

npm start   ```

```

The server will be available at `http://localhost:3000` for MCP connections.

##  Available Scripts

## Development

| Command | Description |

|---------|-------------|### Watch mode for development (with hot reloading)

| `npm run dev` | Start development server with hot reload (Node 22.18+ native TS support) |

| `npm run build` | Build production bundle with Vite |```bash

| `npm start` | Start production server from `dist/` |npm run dev

| `npm test` | Run tests in watch mode with Vitest |```

| `npm run test:ci` | Run tests once and output JSON results |

| `npm run lint` | Check code quality with ESLint |### Build the project

| `npm run lint:fix` | Fix auto-fixable linting issues |

| `npm run format` | Format code with Prettier |```bash

| `npm run format:check` | Check code formatting |npm run build

```

##  Available MCP Tools

### Linting

This template includes two example tools to help you get started:

- Lint the project

### 1. Echo Tool

```bash

Echoes back the provided message - a simple demonstration of MCP tool implementation.npm run lint

```

**Parameters:**

- `message` (string, required): The message to echo back- Fix all auto-fixable lint errors



**Example:**```bash

```jsonnpm run lint:fix

{```

  "message": "Hello, MCP!"

}### Formatting

```

- Format files in the project

### 2. Generate Movie Story Tool

```bash

Generates a random movie story idea with genre, protagonist, goal, and obstacle.npm run format

```

**Parameters:** None

- Check formatting

**Example Response:**

```json```bash

{npm run format:check

  "genre": "Sci-Fi",```

  "protagonist": "A skeptical scientist",

  "goal": "to prevent a global catastrophe",## Available Tools

  "obstacle": "a relentless assassin",

  "logline": "In a Sci-Fi world, A skeptical scientist must prevent a global catastrophe while facing a relentless assassin."The template includes one example tool:

}

```### echo



##  Project StructureEchoes back the provided message - a simple example to demonstrate MCP tool implementation.



```**Parameters:**

mcp-typescript-template/

├── src/- `message` (string) - The message to echo back

│   ├── index.ts                    # Main MCP server with Express HTTP transport

│   ├── config.ts                   # Environment configuration with Zod validation## Customizing Your MCP Server

│   ├── logger.ts                   # Structured logging with Pino

│   └── lib/1. **Update package.json** - Change name, description, and keywords

│       ├── utils.ts                # Utility functions for MCP responses2. **Modify src/index.ts** - Replace the echo tool with your custom tools

│       ├── utils.test.ts           # Unit tests for utilities3. **Add your logic** - Create additional TypeScript files for your business logic

│       └── movieStoryGenerator.ts  # Movie story generation tool logic4. **Update README** - Document your specific MCP server functionality

├── dist/                           # Build output (generated by Vite)

├── test-results.json              # Test results (generated by CI)## Docker

├── vite.config.ts                 # Vite build configuration

├── tsconfig.json                  # TypeScript configuration (strict mode)Build and run using Docker:

├── eslint.config.js               # ESLint configuration

├── Dockerfile                     # Docker containerization- Build the Docker image

├── package.json                   # Dependencies and scripts

└── .github/```bash

    └── copilot-instructions.md    # GitHub Copilot guidancedocker build -t my-mcp-server .

``````



##  Configuration- Run the container



Configuration is managed through environment variables validated with Zod schemas.```bash

docker run -p 3000:3000 my-mcp-server

### Environment Variables```



| Variable | Type | Default | Description |### Docker Compose

|----------|------|---------|-------------|

| `PORT` | number | `3000` | Server port |```yaml

| `NODE_ENV` | `development` \| `production` \| `test` | `development` | Environment mode |# docker-compose.yml

| `SERVER_NAME` | string | `mcp-typescript-template` | MCP server name |version: "3.8"

| `SERVER_VERSION` | string | `1.0.0` | Server version |services:

| `LOG_LEVEL` | `error` \| `warn` \| `info` \| `debug` | `info` | Logging level |  mcp-server:

    build: .

### Example `.env` File    ports:

      - "3000:3000"

```env    environment:

PORT=3000      - PORT=3000

NODE_ENV=development```

SERVER_NAME=my-mcp-server

SERVER_VERSION=1.0.0```bash

LOG_LEVEL=debugdocker-compose up --build

``````



##  Architecture## Project Structure



### HTTP Transport```

mcp-typescript-template/

The server uses Express with `StreamableHTTPServerTransport` from the MCP SDK for remote connections:├── src/

│   └── index.ts          # Main MCP server entry point

- **Session Management**: Automatic session ID generation and tracking├── dist/                 # Built output (generated)

- **Initialization**: Handles MCP protocol initialization├── .eslintrc.js         # ESLint configuration

- **Request Handling**: Processes tool calls and returns formatted responses├── .prettierrc          # Prettier configuration

- **Error Handling**: Graceful error responses in MCP format├── tsconfig.json        # TypeScript configuration

├── vite.config.ts       # Vite build configuration

### Structured Logging├── Dockerfile           # Docker configuration

└── package.json         # Dependencies and scripts

Uses Pino for high-performance, structured logging:```



- **Context-aware**: Automatically includes relevant metadata## Architecture

- **OpenTelemetry Ready**: Compatible with OTel trace correlation

- **Production Optimized**: Minimal overhead with JSON outputThis template follows a simple architecture:

- **Pretty Printing**: Human-readable logs in development

- **HTTP Transport** - Uses Express with StreamableHTTPServerTransport for remote MCP connections

### Configuration Management- **Tool Registration** - Tools are registered with JSON schemas for input validation

- **Error Handling** - Proper MCP-formatted error responses

Environment variables are:- **Session Management** - Handles MCP session initialization and management



1. **Validated** with Zod schemas on startup## Example: Adding a New Tool

2. **Type-safe** with TypeScript inference

3. **Centralized** in `src/config.ts````typescript

4. **Immutable** after initializationimport { createTextResult } from "./lib/utils.js";



##  Customization Guideserver.registerTool(

  "my_tool",

### Adding a New MCP Tool  {

    title: "My Custom Tool",

1. **Register the tool** in `src/index.ts`:    description: "Description of what this tool does",

    inputSchema: {

```typescript      param1: z.string().describe("Description of param1"),

import { z } from "zod";      param2: z.number().optional().describe("Optional parameter"),

import { createTextResult } from "./lib/utils.js";    },

  },

server.registerTool(  async (args) => {

  "my_custom_tool",    // Your tool logic here

  {    const result = await myCustomLogic(args.param1, args.param2);

    title: "My Custom Tool",

    description: "Clear description of what this tool does",    return createTextResult(result);

    inputSchema: {  },

      param1: z.string().describe("Description of param1"),);

      param2: z.number().optional().describe("Optional parameter"),```

    },

  },## Why Express?

  async (args) => {

    logger.info("Tool executed", { toolName: "my_custom_tool", args });This template uses Express for the HTTP server, which provides:

    

    try {- **MCP SDK Compatibility** - Full compatibility with the MCP TypeScript SDK's StreamableHTTPServerTransport

      // Your tool logic here- **Mature & Stable** - Battle-tested HTTP server with extensive ecosystem

      const result = await myCustomLogic(args.param1, args.param2);- **TypeScript Support** - Excellent TypeScript support with comprehensive type definitions

      - **Middleware Ecosystem** - Rich ecosystem of middleware for common tasks

      return createTextResult(result);- **Documentation** - Comprehensive documentation and community support

    } catch (error) {- **Reliability** - Proven reliability for production applications

      logger.error("Tool execution failed", { 

        toolName: "my_custom_tool", ## Repository Guidelines

        error: error instanceof Error ? error.message : error 

      });Contributors should review `AGENTS.md` for project structure, coding standards, and pull request expectations before opening changes.

      throw error;
    }
  }
);
```

2. **Create tool logic** in `src/lib/myCustomLogic.ts`:

```typescript
export async function myCustomLogic(param1: string, param2?: number) {
  // Implement your business logic
  return {
    result: `Processed: ${param1}`,
    count: param2 || 0
  };
}
```

3. **Add tests** in `src/lib/myCustomLogic.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { myCustomLogic } from './myCustomLogic.js';

describe('myCustomLogic', () => {
  it('should process input correctly', async () => {
    const result = await myCustomLogic('test', 42);
    expect(result.result).toBe('Processed: test');
    expect(result.count).toBe(42);
  });
});
```

### Logging Best Practices

**Always use structured logging** instead of `console.log`:

```typescript
import { logger } from './logger.js';

//  Good - Structured with context
logger.info('User action completed', { userId: 123, action: 'login' });

//  Good - Error logging
logger.error('Failed to process request', { 
  error: error.message,
  requestId: req.id 
});

//  Bad - Avoid console.log
console.log('Something happened');
```

### Configuration Best Practices

**Always use `getConfig()`** instead of accessing `process.env` directly:

```typescript
import { getConfig } from './config.js';

//  Good - Type-safe and validated
const config = getConfig();
const port = config.PORT;

//  Bad - No validation or type safety
const port = process.env.PORT;
```

##  Docker Deployment

### Build Docker Image

```bash
docker build -t my-mcp-server .
```

### Run Container

```bash
docker run -p 3000:3000 \
  -e SERVER_NAME=my-mcp-server \
  -e LOG_LEVEL=info \
  my-mcp-server
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
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
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```

##  Testing

### Run Tests

```bash
# Watch mode (interactive)
npm test

# Single run (CI)
npm run test:ci
```

### Writing Tests

Tests are colocated with source files:

```typescript
// src/lib/utils.test.ts
import { describe, it, expect } from 'vitest';
import { createTextResult } from './utils.js';

describe('createTextResult', () => {
  it('should create MCP text content', () => {
    const result = createTextResult({ message: 'Hello' });
    
    expect(result).toEqual({
      content: [
        {
          type: 'text',
          text: '{"message":"Hello"}'
        }
      ]
    });
  });
});
```

##  Code Quality

### Linting

ESLint is configured with TypeScript support:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

Prettier ensures consistent code style:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

##  Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes following the coding guidelines
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Format code: `npm run format`
7. Commit using conventional commits: `git commit -m "feat: add new feature"`
8. Push to your fork: `git push origin feature/my-feature`
9. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [Pino Logger](https://getpino.io)
- [Express.js](https://expressjs.com)

##  Acknowledgments

- Built with the [Model Context Protocol](https://modelcontextprotocol.io)
- Inspired by modern TypeScript best practices
- Community contributions and feedback

---

**Happy coding!**  If you find this template helpful, please consider giving it a star 
