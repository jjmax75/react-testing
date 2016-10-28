module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './bundle/main.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            }
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};