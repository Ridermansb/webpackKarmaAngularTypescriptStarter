module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        files: ['test/**/*-test.ts'],
        exclude: [],
        preprocessors: {
            '**/*.ts': ['typescript']
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
            options: {
                sourceMap: false,
                target: 'es5',
                module: 'commonjs',
                removeComments: true
            },
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        }
    })
};
