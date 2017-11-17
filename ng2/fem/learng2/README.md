# Building an Angular 2 Website Using Routes
This is a simple Angular 2 website using the brand new router. It demonstrates how to build components, configure routes, inject services, and use the `@Input` decorator to bind properties to components.

## Dependencies
- You must have `node v >= 4.0` and `npm` installed (via `brew install node` or [NodeJS.org](https://nodejs.org/en/));
- `npm i -g typings webpack-dev-server webpack rimraf`
- If you have previously installed `typings`, be sure you are on `version 1.x` as this repo requires it

## Getting Started


```bash
git clone https://github.com/onehungrymind/fem-ng2-simple-app.git
cd fem-ng2-simple-app
npm i
typings install
npm start
```

Then navigate your browser to http://localhost:3001 and use the app.

## Testing
The test setup includes `webpack.test.config.js`, `spec-bundle.js`, and `karma.conf.js`. To run unit tests, execute `npm test` in your terminal.
