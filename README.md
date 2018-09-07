# Nyt

## How To Start This Project

1. git clone https://github.com/bossberry/NYT.git
2. npm install
3. ng serve
4. Navigate to `http://localhost:4200/`

## Description This Project

This Project Start with Angular 6 CLI

1. HomePage - use nytimes top_stories API
    1.1 Search and Sort
    1.2 Go To Detail Article Page with  ... icon on each news
        1.2.1 Detail 1 for use  nytimes timeswire API
        1.2.2 Detail 2 for use  Local Storage
2. Detail page Article
    2.1 use nytimes timeswire API and Local Storage.
    2.2 Text NEW YORK TODAY for back previous navigation
    nytimes timeswire API search by url encode but this API doesn't work and get errorr "Unknown error while sending request. Check your browser's console for details." (the original Example `https://developer.nytimes.com/timeswire_v3.json#/Console/GET/content.json` ).
    So, try to another medthod for news content, but from the API Gallery `https://developer.nytimes.com/` there is no such any API as work as we need.

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
