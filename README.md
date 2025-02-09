This is a community book app.

## Tech stack

- Next.js, ChakraUI, TypeScript
- next-international
- Docker

## Future features

- List with book news
- Book detail with information

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

You have to create `.env` file with variables like `.env.example`. For Docker, make sure to:

1. Copy `.env.example` to `.env`
2. Fill in the required values

## Development Options

You can develop this application in two ways:

1. **Local Development** (recommended for active development)

   - Faster feedback loop
   - Hot reload works out of the box
   - Use `npm run dev`

2. **Docker Development** (recommended for testing production-like environment)
   - Ensures consistency across different environments
   - Matches production environment more closely
   - Use `npm run docker:build` and `npm run docker:start`

### Docker Development

1. Build the Docker image:

```bash
npm run docker:build
```

2. Start the Docker container:

```bash
npm run docker:start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

To stop the Docker container:

```bash
npm run docker:stop
```
