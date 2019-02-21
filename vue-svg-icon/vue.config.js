const path = require('path')
const svgoConfig = require("./svgo-config.json");

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

 module.exports = {
  chainWebpack: config => {
    config.module
        .rule('svg')
        .exclude.add(resolve('src/assets/svgs'))
        .end()

    config.module
      .rule('svg-sprite-svgo-loader')
      .test(/\.svg$/)
      .include
        .add(resolve('src/assets/svgs')) //处理svg目录
        .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
      .use('svgo-loader')
      .loader('svgo-loader')
        .options(svgoConfig)
  }
}