const path = require('path');

module.exports = {
  "mode": "none",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js",
    "assetModuleFilename": 'images/[hash][ext][query]'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
    },
    {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name]-[hash][ext]'
        }
    }
    ]
  }
};