/**
 * Automatically hook babel into all node requires.
 * optional: ['es7.asyncFunctions', 'es7.classProperties', 'es7.decorators'],
 "plugins": [
 "transform-es2015-arrow-functions",
 "check-es2015-constants",
 "transform-es2015-block-scoping"
 ],
 "presets": ["es2015", "env", "react", "stage-2"]
*/
require('babel-register')({
  "presets": ["react-native"],
  "plugins": ["transform-runtime"]
});

/**
 * Intl APIs (ECMA-402) Polyfill.
 */
require('./src/utils/intlServerPolyfill');

/**
 * Start application server.
 */
require('./src/server');

/**
 * In development, also start Webpack dev server.
 */
if (process.env.NODE_ENV === 'development') {
    require('./webpack-dev-server');
}
