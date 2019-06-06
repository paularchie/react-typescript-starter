var path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HWP(
            { template: path.join(__dirname, '/public/index.html') }
        )
    ]
};