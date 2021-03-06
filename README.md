# ROCC Web Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Usage

### Running with Docker

TBA

### Running with Angular CLI

This section describes how to start the ROCC API service and the ROCC Angular
app in development environment. After each step, you need to come back to the
project root folder.

1. git clone --recursive https://github.com/Sage-Bionetworks/rocc-app.git
2. Build the Sage Bionetworks library for Angular

       cd sage-angular/
       npm ci
       cd projects/sage-angular
       npm build sage-angular

3. Build the ROCC client library for Angular

       cd rocc-client-angular/rocc-client
       npm ci
       npm run build

4. Install the dependencies

       npm ci

5. Start the [ROCC API service] on http://localhost:8080/api/v1

6. Start the web client (uses Angular CLI)

       npm run start

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License

[Apache License 2.0]

<!-- Links -->

[ROCC API service]: https://github.com/Sage-Bionetworks/rocc
[Apache License 2.0]: https://github.com/Sage-Bionetworks/rocc-app/blob/develop/LICENSE
