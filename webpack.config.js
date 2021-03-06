var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    bundle: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,  
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
          test: /\.css$/,
          loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("React Practice"),
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    }),
    new webpack.EnvironmentPlugin([
      "SUVODA_SERVER"
    ])
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // }),
  ],
  devServer: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
