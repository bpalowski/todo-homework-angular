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

# Components
1. Components
  - Components are reusable units of code that contain business and user interface logic as well as html and css. Everything  in Angular is a component.
  - To generate a new component we can use
  - ``` terminal
      $ ng g component welcome
    ```
  - Angular has generated a basic app, which we can run this to load it
  - ``` terminal
      $ ng serve
    ```
2. The Root Component
  - Every angular app requires a root component. All other components reside in this primary root component.
  - if you open src/app, you can see that Angular CLI has already generate five files. For of these begin with app.component. They include the component itself(app.component.ts), tests for the component (app.component.spec.ts), and HTML and CSS for the component(app.domponent.html & app.component.css).
  - app.module.ts is an essential part of the angular application.
3. Nerve Center of component
  - Looking at the app.component.ts, this file will import any basic functionality it needs. Our component is broken into: annotation and class declaration. All components have both an annotation and class declaration.
  - The annotation includes all code inside of @Component. It deals with how our component looks. It tells the component where it should go on the page(selector), how it should look(templateUrl), and how it should be styled(styleUrls).
  - Class declaration includes all code inside the AppComponent class. It contains logic that defines the components behavior. For instance, we'll create a component to display information about each Task, the template will display its description and a checkbox to mark a Task complete. The class declaration will contain a method to actually update that task complete property.
  - Class annotation determines how a component appears, class declaration defines how it behaves.

# Class annotation
1. app/app.component.ts
  - @Component({...}) is known as a decorator. They are pieces of syntax that configure elements like components. The decorator above tells Angular that the following code defines  a new component and should have the functions outlined by angulars own Component code.
  - selector: 'app-root', determines where the component should be rendered.
2. src/index.html
  - The html tag <app-root></app-root> will render the <app-root> component
  - <app-root> is a selector tag that refers to the root component by matching the selector in our root components annotation. We can change tags but we would also have to change it in the selector.
    - The templateUrl portion specifies the HTML that will be displayed whenever the component is placed. Specifically, we specify that the HTML inside app.component.html will go inside<app-root> tags in our index.html
    - We also have styleUrls, where we can link specific stylesheets, since this is an array we can link multiple stylesheets.
  - The first thing that is asked is that we change the information on app/app.component.html. You hardcode the HTML that will show up in that section.
  - Last is adding css to the app/app.component.css

# Using variables in class declaration
1. Changing hardcoded titles
  - Let's say we don't want to have hardcoded titles, open app/app.components.ts, and add a display variable. We pass this display variable into app.component.html with {{}} brackets, which lets it know of a known property on the component.
2. Variables referencing other variables
  - This example should show a value of dynamic display, by adding current dates. In app/app.component.html, add in the header {{month}}/{{day}}/{{year}}.
  - We then define these values in the components class declaration by creating a new date and retrieving the month day and year with the built in js methods. The keyword this has to reference variables that have already been declared, because currentFocus and currentTime are properties of the class.
  - again when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
3. Dot Notation in Component Templates
  - Lets create a firstTask to go with currentFocus, we will do this for now with an object literal (titled firstTask)
  - We used dot notation to access firstTask properties directly in the template. This example shows how to display templates in the view.

# Using Models
1. Creating a Model
  - We start the lesson out by creating a Task class declaration in our root component, and remove our previous literal. We will expand the tasks property to include two properties
    - Boolean called done with default value of false
    - String named description about the task
  - Add it to the end of the app.component and then inside AppComponent, defined a new first task.
  - To allow multiple components to access the model? Our code would be hard to manage, and we should separate our concerns. By having our components focus purely on behavior, we can allow our models to focus on what they need to.
  - First we move our tasks class from the components, and put it in a new directory in the app section called models, with the file name being task.model.ts
  - Last we add an import statement to app.component.ts so it knows about the model. We should keep our models separate from our components. We can display dynamic views with data from a model.

# Views: Intro to Directives
1. Introduction to Directives
  - Directives are tools that allow us to add loops, conditionals, and so forth into our templates. These change the way the DOM appears. There are three types of directives in angular:
    - Structural Directives: These change the structure of the DOM by adding and removing elements(like how we used .append() and .remove() with jquery)
    - Attribute Directives: These change the appearance or behavior of an element in the DOM.
    - Components: These are directives too. They can be dynamically rendered in the DOM and alter the DOM's appearance.
  - This section focuses on structural directives.
2. Structural Directives
  - We often used jQuery to append each array element using a loop. This leads to messy code.
3. The ngFor Repeater Directives
  - Angular has a directive for looping, lets replays our first task with an array of tasks. We then use the repeater directive to loop through the tasks in the template.
  - * ngFor is Angulars repeater directive, we add it directly to the li tag itself, where it it makes a copy for each li item in our List
  - with "let currentTask of tasks", which is equivocal to 'tasks.forEach(function(currentTask){})', its similar to functions in ES6.
