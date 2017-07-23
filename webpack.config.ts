import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    module: {
        loaders: [
            { test: /.tsx?$/, loader: 'awesome-typescript-loader'}
        ]
    }
}

export default config;