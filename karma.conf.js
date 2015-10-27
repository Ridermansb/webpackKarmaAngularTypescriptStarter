var webpackConfig = require('./webpack.config');
// webpackConfig.devtool = 'inline-source-map';
webpackConfig.stats = { colors: true, reasons: true };

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        files: ['test/**/*-test.ts'],
        exclude: [],
        preprocessors: {
            'test/**/*.ts': 'webpack'
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
        webpack: webpackConfig
    })
};
