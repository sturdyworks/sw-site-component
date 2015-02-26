# sw-site-component

> Sturdyworks Web-site Component (AngularJS Directive) seed

## Purpose

Create an overall web-site component using an AngularJS directive **sw-site** which utilizes an enhanced multi-transclude.js replacement for **ng-transclude** that adds feature most likely in AngularJS 2.0

MultiTransclude loops through elements to clone: 1) Get target ID ; 2) Find target element with that ID ; 3) Append clone element to target ;

```
.factory("MultiTransclude", () => {
  return {
    transclude: (elem, transcludeFn) => {
      transcludeFn((clone) => {
        angular.forEach(clone, (cloneEl) => {
          // get desired target ID
          var tId = cloneEl.attributes["transclude-to"].value;
          // find target element with that ID
          var target = templ.find(`[transclude-id="${tId}"]`);
          // append element to target
          if (target.length) {
            target.append(cloneEl);
          } else {
            cloneEl.remove();
            throw new Error(
              `Target not found. Please specify the correct 
               transclude-to attribute.`
            );
          }
        });
      });
    }
  }
}

.directive("swSite", (MultiTransclude) => {
  return {
    scope: {},
    transclude: true,
    template: `
      <div>
        <header transclude-id="site-head"></header>
        <nav transclude-id="site-menu"></nav>
        <main transclude-id="site-body"></main>
        <footer></footer>
      </div>`
    link: (scope, iElem, iAttrs, ctrl, transclude) => {
      MultiTransclude.transclude(iElem, transclude);
    }
  };
});

<sw-site>
  <div transclude-to="site-head">
    I’m transcluding the header.
  </div>
  <div transclude-to="site-menu">
    I’m transcluding the menu.
  </div>
  <div transclude-to="site-body">
    I’m transcluding the body.
  </div>
</swb-site>
```

A more complete [CodePen](http://codepen.io/kara/pen/XJpEyN) is also available until **GitHub** code commit.

## Project Generator

Project uses [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) which organizes Angular components by feature (home, about, video player, etc.) instead of by type (controller, service, directive, etc.) to encourage the development of self-contained, reusable components, and has Polymer feature but isn't required for web-site component. A typical workflow with this generator consists of creating an Angular module ([ng-poly:module](#module)) and then generating controllers, directives, etc. for this module to create a new feature.

<img height="100" align="left" src="static/bullet-yo.gif">

<img height="100" align="left" src="static/gulp.png">

<img height="100" align="left" src="static/bower-logo.png">

<img height="100" align="left" src="static/angularjs-logo.png">

<img height="100" align="left" src="static/angular-ui.jpeg">

<img height="100" align="left" src="static/bootstrap.jpeg">

<br><br><br><br>


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

## Options Used for File Generation

```
$ yo ng-poly

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |    Welcome to ngPoly!    |
   `---------´   '--------------------------'
    ( _´U`_ )
    /___A___\
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What is the app's name? sw-site
? Which version of Angular should be used? 1.3.*
? What host should the app run on? localhost
? Which port should the app run on? 3000
? Which folder should the app be developed in? app
? Which is the preferred markup language? HTML
? Which is the preferred application scripting language? JavaScript
? Want to use Controller As syntax? Yes
? By default, should the route generator create controllers? Yes
? Should functions be defined and passed instead of defined inline (in callbacks)? No
? Want to use named functions instead of anonymous? No
? Where should unit tests be saved? app
? Which is the preferred test scripting language? JavaScript
? Which is the preferred unit testing framework? Jasmine
? Which is the preferred e2e testing framework? Jasmine
? Which is the preferred style language? SCSS
? Should Polymer support be enabled? No
? Should a framework be setup? Bootstrap with UI Bootstrap
? Should ngRoute be used instead of UI Router? No
? Which additional Bower components should be installed? 
```
- [x] Angular Animate 
- [x] Angular Aria 
- [x] Angular Cookies
- [x] Angular Messages
- [x] Angular Resource
- [x] Angular Sanitize
- [x] Angular Touch
- [x] Font Awesome
- [x] Lo-Dash
- [x] Restangular (installs Lo-Dash)
