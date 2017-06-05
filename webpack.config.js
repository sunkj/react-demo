var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ASSETS_PATH = path.resolve(ROOT_PATH, 'assets');

var ENV = process.env.NODE_ENV;
var main = 'main.jsx';

switch (ENV){
    case 'todo':
        main = path.resolve(APP_PATH, 'todoApp', 'main.jsx');
        break;
    case 'demo1':
        break;
    default:
        break
}

module.exports= {
    entry: {
        app: main
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        // 需要进行模块解析的后缀名 (数组)
        // https://webpack.js.org/configuration/resolve/#resolve-extensions
        extensions: ['.jsx', '.js', '.json']
    },
    //启动dev source map，出错以后就会采用source-map的形式直接显示你出错代码的位置。
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        contentBase: './build',
        //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        historyApiFallback: true,
        //设置默认监听端口，如果省略，默认为"8080"
        port: 8080,
    },
    module: {
        //loaders加载器
        loaders: [
            {
                //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                test: /\.(js|jsx)$/,
                //屏蔽不需要处理的文件（文件夹）（可选）
                exclude: /node_modules/,
                include: APP_PATH,
                //loader的名称（必须）
                loader: 'babel-loader'

            }
        ]
    },
    plugins: [
        //热模块替换插件
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(APP_PATH, 'index.html'),
            filename: 'index.html',
            title:'react template'
        }),
    ],
}