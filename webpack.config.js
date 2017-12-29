module.exports = {
    entry: ['./main.js'],
    output: {
       
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                // presets: ['es2015', 'react']
                presets: ['es2015', 'react']
            }
        }]
    }
}