module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: "bundle.js",
    publicPath: '/'
  },
  devtools: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
