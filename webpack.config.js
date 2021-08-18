const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
module.exports = {
    entry:path.resolve(__dirname, 'src','index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:['babel-loader'],
            },
            {
                test:/\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: { plugin: ['lodash'] },
                    }
                ],
            },
        ]
    },
    devServer: {
        historyApiFallback:true,
        port:3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            template:'./src/index.html',
        }),
        new CaseSensitivePathsPlugin(),
    ]
}