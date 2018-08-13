# Angular cli for learning folder/file structure

1. e2e
  - e2e is a directory for tests(end2end), it checks the users experience.
  - this directory contains app.po.ts & app.e2e-specs.ts and a tsconfig.json files for configs.
2. src
  - src is the folder that contains our source code. we do dev in these files.
  - favicon.ico contains small icons on the browser tab, this can be replaced
  - index.html is the index of the page
  - main.ts is the entry point for the app, this provides instructions for assembling our app.
  - polyfills.ts, a polyfill code implements a feature on web browsers that dont technically support that feature. Angular CLI imports polyfills in typescript file and loads it into main.ts
  - styles.css (obv)
  - test.ts, configuration file for testing, responsible for declaring variables used throughout tests and loading the necessary modules when tests are run
  - tsconfig.json, this contains our config for the typescript compiler-cli
3. src/assets
  - We have an assets directory for images and outside scripts
4. src/environments
  - contains subdirectories called environments and contains environment.prod.ts & environment.ts
  - our development environment includes all tools, packages, and configs necessary for development. this includes testing suites and files,
  - product environment includes only tools, packages, modules, and code necessary
5. top level
  - .editorconfig, helps devs maintain consistent coding styles across editors.
  - .gitignore, angular creates one with a baseline of importance
  - angular-cli.json, contains angular cli configs for building and serving a project
  - karma.conf.js, contains karma settings.
  - package.json, npm packages and scripts
  - protractor.conf.js, configs for testing tool called protractor
  - README.md, automated README
  - tslint.json, contains configs for typescript linter.
6. src/app
  - app.module.ts file for root module with a decorator and import statements to most common portions of angular framework.
  - app.component.ts file for root component
  - app.component.html external html template
  - each component has its own stylesheet: app.component.css

# Root Module
1. Modules
  - Imagine a large Angular app is like a large company, Modules are different departments. Departments are physically organized into offices or buildings, and while each works for the same company, they each have a unique purpose.
  - A module may contain multiple components. These are similar to the equipment and employees that belong to a specific department.
  - A component can only belong to one module, except for special circumstances.
2. Root Modules
  - The root module is like the company headquarters. This file is responsible for loading other parts of our app. The root module instructs Angular how to assemble our application.
  - ``` typescript
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { AppComponent } from './app.component';

      @NgModule({
      declarations: [
      AppComponent
      ],
      imports: [
      BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
      })
      export class AppModule { }
    ```
  - BrowserModule imports code to run our app in the browser, including built in directives, for conditionals and loops to components.
  - NgModule imports general Module code from the angular framework core
  - AppComponent is our application root component,
3. Module Decorator
  - app.module.ts has @NgModule decorator. It informs angular that this is a module. It includes declarations, imports, providers and bootstrap
  - imports is an array of other modules and content this module requires. Here, we import a built-in module called BrowserModule. This imports array differs from the import statements. the import statement at the top import functionality from the angular core.
  - declarations is an array of all components that will reside in this module. We only list AppComponent here. We'll soon be adding more components. When we generate new components using the CLI, they will automatically be added.
  - bootstrapping refers to launching an app with the minimum required resources. It has nothing to do with front-end framework bootstrap. Here bootstrap is an array of components required immediately upon launching the application. Because it uses AppComponent right away, that component must be avail as soon as the app boots.
4. Class declaration
  - The root module requires a class declaration. 
