# Installation
1. Ensure a recent version of Node is installed
2. Navigate to this folder in a command line
3. Run in the command line `npm i` or `yarn`
4. To install `yarn`, run in the command line `npm i -g yarn`

# Developing
## Start
Developing consists of running the app locally with automatic reloading when code changes are saved.

1. Navigate to this folder in command line
2. Run in command line `npm run start` or `yarn start`
3. In the browser, go to http://localhost:3000
4. Saving code changes will automatically refresh the page

## Lint
There is a command that can be run to check lint and fix the issues that can be done programatically without manual intervention.

1. Navigate to this folder in command line
2. Run in command line `npm run lint` or `yarn lint`
3. Or run in command line `npm run lint:fix` or `yarn lint:fix`
4. The console will output any errors and warnings found

## Testing
## Test
Test is for run through all tests once.

1. Navigate to this folder in command line
2. Run in command line `npm run test` or `yarn test`
3. The console will output any errors and warnings found

## Test and Watch
Test and Watch is for actively writing tests so they are rerun on every save.

1. Navigate to this folder in command line
2. Run in command line `npm run test:watch` or `yarn test:watch`
3. The console will output any errors and warnings found
4. Upon saving a file, the tests will be rerun

## Test Coverage
Test coverage outputs a folder of all lines covered broken down by file, function, and line.

1. Navigate to this folder in command line
2. Run in command line `npm run test:coverage` or `yarn test:coverage`
3. The console will output any errors and warnings found, as well as a coverage table
4. Open the index.html file in coverage/lcov-report folder to see the coverage in html format

# Production
## Build
Build is for creating a dist folder of all the things required to run the application. Once built, you should be able to upload the contents to a web server for viewing.

1. Navigate to this folder in command line
2. Run in command line `npm run build` or `yarn build`
3. You should now be able to see minified code in the `dist` folder

## Build and Serve
Build and serve is used for testing the final application locally.

1. Navigate to this folder in command line
2. Run in command line `npm run build:serve` or `yarn build:serve`
3. In the browser, go to http://localhost:3000 to view the production ready application