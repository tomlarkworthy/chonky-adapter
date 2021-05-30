const path = require('path');

module.exports = [{
  entry: './node_modules/chonky/lib/index.js',
  name: "chonky",
  mode: 'production',
  externals: {
    react: {
      root: 'React',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      amd: 'react-dom',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chonky-amd.js',
    library: "chonky",
    libraryTarget: 'amd'
  },
}, {
  entry: './node_modules/chonky-icon-fontawesome/lib/index.js',
  name: "chonky-icons",
  mode: 'production',
  externals: {
    react: {
      root: 'React',
      amd: 'react',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chonky-icons-amd.js',
    library: "chonkyicons",
    libraryTarget: 'amd'
  },
}];
