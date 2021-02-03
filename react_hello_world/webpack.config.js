const path = require('path');
module.exports = {
    //webpack要打包的.js
    entry: ['./app.jsx'],
    output: {
        //打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，專案的根目錄下的public目錄
        path: path.resolve('./public'),
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react','@babel/preset-env'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: 'public'
    }
};