# MovieApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## 🐳 Run with Docker

### 1. Clone the repository

```bash
git clone https://github.com/stefaniprata/movie-app.git
cd movie-app
```

You can use for local development using the following commands:

```bash
docker build -t stefani-movie-app .
docker run -d -p 8080:8080 --name stefani-movie-app-container stefani-movie-app
```

Or pull the already created image from [Docker Hub](https://hub.docker.com/r/stefaniprata/movie-app) by running this command:

```bash
docker pull stefaniprata/movie-app
```

and then running the following command to run the image you just pulled:

```bash
docker run -d -p 8080:8080 stefaniprata/movie-app:latest
```

Then open your browser and visit:
[http://localhost:8080](http://localhost:8080)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
