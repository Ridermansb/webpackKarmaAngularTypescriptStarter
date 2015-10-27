
// require('core-js/es5');

var context = require.context('./test', true, /-test\.js$/);
context.keys().forEach(context);