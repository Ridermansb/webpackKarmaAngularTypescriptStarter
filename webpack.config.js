module.exports = {
    entry: [ __dirname + '/app.ts' ],
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader', exclude: [ /node_modules/ ] }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', 'html'],
        modulesDirectories: ['node_modules']
    }

};
