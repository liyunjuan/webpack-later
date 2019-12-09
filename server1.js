const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.dev.js/index.js')
const compiler = webpack(config)

const app = express();

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, () => {
  console.log('server is running')
})
