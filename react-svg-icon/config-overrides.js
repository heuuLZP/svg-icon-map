const path = require('path')
const svgoConfig = require("./svgo-config.json");

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.module.rules[2].oneOf[7].exclude.push(resolve('src/assets/svgs'))
  
  config.module.rules.push(
    {
      test: /\.svg$/,
      include: resolve('src/assets/svgs'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        },
        {
          loader: 'svgo-loader',
          options: svgoConfig,
        }
      ]
    }
  )
  return config;
}