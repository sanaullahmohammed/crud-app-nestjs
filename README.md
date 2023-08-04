# CRUD App with Nest.js

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Notes

- `main.ts` : Entry point of app
- `NestFactory.create()` : creates a new Nest application instance is created
- `app.module.ts` : contains implementation of applications's root module
- `app.controller.ts` : contains implementation of a basic Nest.js controller with just one route
- `app.service.ts` : contains the basic service implementation (service is injected to controller)
- `app.controller.spec.ts` : testing file for controller
