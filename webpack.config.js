const path=require('path');
const webpack=require('webpack');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
const HtmlWebPackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/main.js',
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/(\.css|\.less)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    publicPath:'./dist',
                    use:['css-loader','less-loader']
                })
            },
            // {
            //     test: /(\.css|\.less)$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         }, {
            //             loader: "css-loader",
            //             options: {
            //                 modules: true
            //             }
            //         }, {
            //             loader: "less-loader",
            //             options: {
            //                 modules: true
            //             }
            //         }, {
            //             loader: "postcss-loader"
            //         }
            //     ]
            // },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve(__dirname, './src/assets/svg'),
                // options: {
                //     runtimeCompat: true
                // }
            },
            {//字体图标
                test:/\.(eot|ttf|woff)(\?.*)?$/,
                loader:'url-loader?limit=50000'
            },
            {//图片
                test:/\.(png|jpg|jpeg|gif)$/,
                loader:'file-loader?limit=952800'
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css'),
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        })
    ]
};