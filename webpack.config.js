const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Clean-webpack-plugin config
const pathsToClean = [
    'dist'
];
const cleanOptions = {
    root: __dirname
};

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Enable sourcemaps for debugging webpack's output
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        // Add .ts and .tsx as resolvable extensions
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            // All files with a .ts or .tsx extension will be handled by awesome-typescript-loader
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            // All output .js files will have any sourcemaps re-processed by source-map-loader
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/components'),
                use: [
                  'style-loader',
                  {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                      modules: true,
                      namedExport: true
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new CopyWebpackPlugin([
            { from: './public/index.html', to: './' },
            { from: './public/w3.css', to: './' },
            { from: './public/favicon.ico', to: './' },
            { from: './public/images', to: './images/' }
        ]),
    ]
}