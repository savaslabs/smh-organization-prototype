const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: function (config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StylelintPlugin({
          configFile: path.resolve(__dirname, '.stylelintrc'),
          configBasedir: path.resolve(__dirname, 'node_modules/'),
          syntax: 'scss',
        })
      )
    }

    return config
  }
};
