const path = require('path');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

const config = {
  entry: path.resolve(__dirname, 'src/main.js'),
  mode: 'none',
  devtool: 'cheap-source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {test: /pixi\.js/, use: ['expose-loader?PIXI']},
      {test: /p2\.js/, use: ['expose-loader?p2']},
      {test: /phaser-split\.js$/, use: ['expose-loader?Phaser']},
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2,
    },
  },
};

module.exports = config;
