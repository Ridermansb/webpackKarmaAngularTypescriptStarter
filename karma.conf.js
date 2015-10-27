var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.stats = { colors: true, reasons: true };

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        files: [{ pattern: 'tests.webpack.js', watched: false }],
        exclude: [],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        plugins: [ 'karma-*' ],
        client: {
            mocha: { ui: 'bdd' }
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        }
    })
};
