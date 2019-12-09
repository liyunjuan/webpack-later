const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')

const commonConfig = {
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "imports-loader?this=>window"
          }
        ]

        // options: {
        // presets: [["@babel/preset-env"], {
        //   targets: {
        //     chrome: "67",
        //   },
        //   useBuiltIns: "usage"
        // }]
        // "plugins": [["@babel/plugin-transform-runtime"], {
        //   "absoluteRuntime": false,

        //   "helpers": true,
        //   "regenerator": true,
        //   "useESModules": false
        // }]
        // }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'loadsh',
      _join: ['loadsh', 'join']   //这个表示在loadsh中打包join复制给 _join
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    usedExports: true,   //告诉webpack没有用到的模块就不打包，同时在package中设置sideEffects数组中加上特殊的
    splitChunks: {
      chunks: 'all',   //async只对异步的打包，all对同步异步都打包 
      minSize: 30000,  //引入的模块大于30000，才分割
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,  //最少使用次数
      maxAsyncRequests: 6,   //同时加载的模块
      maxInitialRequests: 4,   //入口文件中引入的库
      automaticNameDelimiter: '~',   //文件生成的连接符
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          // 当chunks是all的时候，配合适用
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // filename: "vendors.js"   //起的别名，异步不要起别名
          name: "vendors "  //打包出来的名称
        },
        default: {
          // minChunks: 2,
          priority: -20,   //表示优先级
          reuseExistingChunk: true,   //如果一个模块被打包过，可以复用
          filename: "common.js"
        }
      }
    }
  },
  performance: false   //不提示性能
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}
