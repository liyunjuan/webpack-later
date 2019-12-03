const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.jpe?g|png\gif$/,
        use: {
          loader: 'url-loader',
          options: {
            // palaceholder 占位符，配置打包后的名字
            name: '[name]_[hash].[ext]',
            // 将打包好的文件放到指定文件夹
            outputPath: 'images/',
            limit: 2048 //url-loader 独有的
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
