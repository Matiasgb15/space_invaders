const path = require('path');

module.exports = {
  entry: "./lib/space_invaders.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    ,
    publicPath: '/dist/'
  },
  devtool: 'source-map'
  ,
  devServer: {
    static: {
      directory: path.join(__dirname, '.')
    },
    open: true,
    port: 8080
  }
};
