const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: "less-loader",
            options: {
                javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      static: path.resolve(__dirname, 'src/static/'),
      theme: path.resolve(__dirname, 'src/theme/'),
    },
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      path.resolve(__dirname, 'src/'),
      path.resolve(__dirname, 'node_modules/'),
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'node_modules',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: "./index.html"
    }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    compress: true,
  },
};
