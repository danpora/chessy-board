var path = require('path');
module.exports = {
  entry: './src/Board.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'board.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader'
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
