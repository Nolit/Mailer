const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    'index' : './src/ts/index.ts',
    'bootstrap' : './src/ts/bootstrap.tsx'
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: "web",
  externals: [nodeExternals()],
  node: {
    __dirname: false
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
};