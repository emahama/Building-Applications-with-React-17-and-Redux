const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; // Tells babel plugin that we are running id dev mode

// To configure webpack, we export a js object
// in the export we declare an object that configures webpack
module.exports = {
  mode: "development", // Tell webpack to run in dev mode, this set node environment to development and dissable some production features
  target: "web", // We are using webpack to build and app running in the web (browser). if the app runs in node, this need to be set to node. Set to "web" since the app runs in a browser.
  devtool: "cheap-module-source-map", // configure soure map for debugging. Maps the transpiled coded back to the original code we wrote when we view in the browser. Configure source maps for debugging.
  entry: "./src/index", // Entry point for our application. Specify the entry point for the application.

  /**
   *  Define the output directory, public URL, and bundle filename.
   * This is where we want webpact to output. Strictly speaking webpack doesn not output code in dev mode, it puts its in memory, This just specify where the code is serving from memory
   **/
  output: {
    path: path.resolve(__dirname, "build"), // Output directory
    publicPath: "/", // public url of the output directory when referenced from the browser
    filename: "bundle.js", // file name of our bundle
  },

  /**
   * Configure the webpack development server for serving the app locally during development.
   * Setting up webpack devServer to serve our app locally during development*/
  devServer: {
    stats: "minimal", // reduce information it writes to command line
    overlay: true, // overlays any errors that occurs in the browser
    historyApiFallback: true, // Directs all request to index.js, this way we can load deeplinks and they can all be handled by react-router

    // Below is needed due to an open issue in webpack when used with chrome. It can be removed once the issue is resolved
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    https: false,
  },
  /**
   * Use the HtmlWebpackPlugin to generate an HTML file and inject the webpack bundles into the HTML template.
   * Loaders are transformation that are applied to soucre files before bundle system like webpack process them, eg are babel, css etc
   * Plugins extend the capability of build system by handling more complex task that loader alone cannot handle.
   * Plugins optimizes asset, manage build system, inject environment varialbes, and generate addtional files
   * Here we are using HtmlWebpackPlugin to dynamically generate html and inject webpack bundles into the html template
   */

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],

  /**
   * Define rules for processing files with loaders, such as babel-loader for JavaScript files and style-loader and css-loader for CSS files.
   * Here we tell webpack what file we want it to handle.
   * We do that by declaring an array of rules
   */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Files webpack should process
        exclude: /node_modules/, // Files to exclude
        use: ["babel-loader"], // Use babel to transpile and preprocess
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
