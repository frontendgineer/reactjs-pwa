const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcDir = path.resolve(__dirname, "../src/js");
module.exports = {
  entry: path.join(srcDir, "index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      // {
      //     enforce: 'pre',
      //     test:/\.js$/,
      //     loader: 'standard-loader',
      //     exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                module: true,
                localIdentName: "[name]-[local]-[hash:base64:6]",
                camelCase: true
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    })
  ]
};
