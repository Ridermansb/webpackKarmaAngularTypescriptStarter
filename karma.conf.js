module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        files: ['test/**/*-test.ts'],
        exclude: [],
        preprocessors: {
            'test/**/*.ts': 'typescript'
        },
        reporters: ['progress'],
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
        typescriptPreprocessor: {
            typings: [
                'typings/tsd.d.ts'
            ],
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        }
    })
};
