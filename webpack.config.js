const path = require('path');

module.exports = {
  entry: './src/index.js', // the main JavaScript file of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // where to put the bundled output
    filename: 'bundle.js', // the name of the bundled output file
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'], // file types that webpack should resolve
    fallback: {
      "constants": require.resolve("constants-browserify") // fallback for 'constants' module
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // use babel-loader for .js and .jsx files
        exclude: /node_modules/, // don't transpile node_modules
        use: {
          loader: 'babel-loader', // use babel-loader
        },
      },
      {
        test: /\.css$/, // use style-loader and css-loader for .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // this is necessary for routing to work properly in a single-page application
  },
};