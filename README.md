# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

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

#Approach Used

There is one module named as spacex.

There are 5 components:

1. Home - This is the main component which have all the other components. And also in the home component I am calling the api's from service.
2. RocketList - This component gets the data from the home and uses ngFor to pass each item to rocketCard component.
3. RocketCard - This component gets each item from the rocketList and displays the card.
4. Filters - This component is the main container for the filters. This component cals for the button component also by passing the data required for button like button content and the function it should invoke after clicked.
5. Button - This component displays the button on the filter part. It get the data from the filter component.

Also using services to fetch the data from api.

In service there are two main methods which are used to get the data from api.

1. getRocketLaunchData() - This method gets the data without any filters which should be display on the starting.
2. getRocketLaunchDataFilteredData() - This method gets the filtered data by using the data it get as argument and used this data to add in the url.

I've made interface in models folder which specifies the type of data coming from api.
