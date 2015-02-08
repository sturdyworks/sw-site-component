# sw-site-component

> Sturdyworks Web-site Component (AngularJS Directive) seed

## Purpose

This project focuses on creating an Angular web-site component, and uses [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) for organizing Angular components by feature (home, about, video player, etc.) instead of by type (controller, service, directive, etc.) to encourage the development of self-contained, reusable components. Polymer is just an added feature, but it isn't required to utilize the generator.

## Setup

1. Install [Node.js](http://nodejs.org/)
 - This will also install npm.
1. Run `npm install -g bower gulp yo generator-ng-poly`
 - This enables Bower, Gulp, and Yeoman generators to be used from command line.
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Use [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) to create additional components

## Gulp tasks

- Run `gulp build` to compile assets
- Run `gulp dev` to run the build task and setup the development environment
- Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
- Run `gulp webdriverUpdate` to download Selenium server standalone and Chrome driver for e2e testing
- Run `gulp e2eTest` to run e2e tests via Protractor
 - **A localhost must be running** - `gulp dev`
