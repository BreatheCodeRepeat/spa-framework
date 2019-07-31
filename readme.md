# Home Automation App

This is a home automation app build with a custom Single Page App Custom Framework similar to Angular.

## Installation

To install run npm install in the root directiory of app

## Build task

To build the app you can run in the root of website:

npm run-script build --> for development

npm run-script buildprod --> for production build


#Starting endpoint of the framework

The starting file of the framework is the index.ts in the root of the app.

The Framework class needs to be instanciated and the components,routes and services needs to be passed as an argument.



The following code snippet can be used as an example:

var framework = new Framework(
    {
        "routes": paths,
        "components": [
            {"name":"nav",
            "component":NavComponent
            },
            {"name":"dashboard",
            "component":MainDashboardComponent
            },
            {"name":"lightbulb",
            "component":LightBulbComponent
            },
            {"name":"temperature",
            "component":TemperatureComponent
            }
        ],
        "services" : [
            MaterializeService,
            HouseParamService
        ]
    }
);

## Components

The basic building block of the framework is the component.

Components tags are set in the "name" argument in the Framework instatiation.

The resulting tag of the component will be <componentname-component></componentname-component>.

These tags can be used in the whole project in index.html file or @Component(``) annotation of another component.

A basic component needs to have the following features:

1.A new ts file in which the component class will be created

2.The component class must be annotated with @Component

3.@Component annotation need to have two arguments
    3.1 The first argument is the html code of the component
    3.2 The second argument is the css code of the component
    3.3 The css will be appended to the component inline

4.A component need to inherit the abstract class BuilderComponent

5.The OnInit and OnDestroy methods needs to be implemented.

6.Similar to Angular in OnInit all the resources will be instanciated

7.In OnDestroy all the resources(listeners,objects etc) need to be disposed

## Routing

The routing is done with anchor tags which have an bindPath attribute that specifies the path to route to.

The routes must be declared on Framework class instantiation in an array.

Each route must have a attached component;

Example :

[
            { path:'dashboard', component: MainDashboardComponent },
            { path:'temperature', component: TemperatureComponent },
            { path:'lightbulb', component: LightBulbComponent },
];

This must be an input in the "routes" argument to the Framework class instatiation.

The components are switched based on the path that the user is on.

The component <path-placeholer></path-placeholer> is where the change of components is happening.It is similar to <router-outlet></router-outlet> in Angular.

## Services

The Framework uses a dependency injection container to instantiate services and components.

To have the services instanciated the class of the service must be passed as parameter to the "services" array in the Framework class instatiation.

After that services can be injected in components with the method getObject(class) from class Injector.(Injector class can be found in the framework)

The whole time the application is running the services will have just one instance.


#Home Automation App Details

The example app has the framework ts files in the framework folder.

For the creation of a new app there must be a index.html and index.ts file in the root of the app.

The "global" css must be written in the index.html file in a style attribute.

Index.html is the first rendered html in the app.

Index.ts is the app js entrypoint.