const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules",
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    config.module.rules.push({
      test: /\.scss$/,
      use: [
          'style-loader',
          {
              loader: 'css-loader',
              options: {
                  importLoaders: 1,
                  modules: {
                      // mode: 'local',
                      // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                      // localIdentName: '[sha1:hash:hex:4]',
                      // context: path.resolve(__dirname, 'src'),
                      // hashPrefix: 'my-custom-hash',
                  },
              },
          },
          'sass-loader'
      ],
    });

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: [
    //     'style-loader', 
    //     'css-loader',
    //     {
    //       loader: "sass-loader",
    //     }, 
    //   ],
    // });

    return config;
  },
  framework: "@storybook/react"
}