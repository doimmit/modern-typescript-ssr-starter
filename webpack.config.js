const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    name: "modern-ssr-boilerplate",
    mode: "development",
    
    resolve: {
        modules:['node_modules'], 
        extensions:['.ts','.js','json','.scss','.css'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Pages': path.resolve(__dirname, 'src/pages/'), 
            '@Components': path.resolve(__dirname, 'src/components/'), 
            '@Public': path.resolve(__dirname, 'public/')
        }
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        inline: true,
        hot: true,
        host: "0.0.0.0",
        port: 80
    },    
    entry: ['./src/index.ts'],
    module: {
        rules: [
            {
                test: /\.js$/, 
                use:['babel-loader'],
                exclude:path.join(__dirname,'node_modules')
            },
            {
                test: /\.html$/, 
                use:[{
                        loader: 'html-loader',
                        options: {'minimize': true}
                }]
            },
            {
                test: /\.scss$/, 
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                exclude:path.join(__dirname,'node_modules')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[{
                    loader:'file-loader', 
                    options:{ 
                        name:'[hash].[ext]', 
                        outputPath:'res/images', 
                        publicPath:'res/images'
                    }
                }]
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            inject: false,
            filename: path.join(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.[chunkhash].js'
    }
}