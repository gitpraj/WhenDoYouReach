import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output:{
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server')
                ],
                loaders: ['react-hot-loader', 'babel-loader'],
            },
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'public/css'),
                    path.join(__dirname, 'node_modules')
                ],
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                include: [
                    path.join(__dirname, 'client/images'),
                ],
                loader: ['url-loader?limit=8192']
            },
            {
                test: /\.json$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server')
                ],
                loaders: ['json-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    node: {
        net: 'empty',
        dns: 'empty',
        fs: 'empty',
        child_process: 'empty'
    }
}
