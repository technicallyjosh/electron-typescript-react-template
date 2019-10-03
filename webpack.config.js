const webpack = require('webpack');
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const titlePrefix = 'TC Notifier';

const pages = [
  {
    title: `${titlePrefix} Login`,
    name: 'login',
    chunks: ['login'],
  },
];

const htmlDefaults = {
  template: './src/app/template.html',
};

module.exports = {
  devtool: 'source-map',
  target: 'electron-renderer',
  entry: {
    login: './src/app/Login.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: resolve('./dist/app'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('./src/app/static/images'),
        to: resolve('./dist/app/images'),
      },
      {
        from: resolve('./node_modules/semantic-ui-css/semantic.min.css'),
        to: resolve('./dist/app/css/semantic.min.css'),
      },
      {
        from: resolve('./node_modules/semantic-ui-css/themes/default/assets/fonts'),
        to: resolve('./dist/app/css/themes/default/assets/fonts'),
      },
    ]),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    // index page
    new HtmlWebpackPlugin({
      ...htmlDefaults,
      title: `${titlePrefix} Home`,
      name: 'app',
      chunks: ['app'],
    }),
    // all other pages
    ...pages.map(
      p =>
        new HtmlWebpackPlugin({
          ...htmlDefaults,
          title: p.title,
          name: p.name,
          filename: `${p.name}.html`,
          chunks: p.chunks,
        }),
    ),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  watchOptions: {
    ignored: ['dist', 'node_modules'],
  },
};
