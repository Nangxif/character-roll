const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: '../plugin/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, './dist'), //输出路径，就是上步骤中新建的dist目录，
    publicPath: '/dist/',
    filename: 'character-roll.min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env']]
        }
      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  plugins: [new VueLoaderPlugin()],
  mode: 'production'
};
