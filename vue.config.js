const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    },
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
      hot: true,
      https: true,
      proxy: {
        '/api': {
          target: 'https://clasign.test.myopeninfra.com',
          secure: false,
          changeOrigin: true
          // pathRewrite: {
          //     '^/api': ''
          // }
        }
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
    const fileRule = config.module.rule('file');
    fileRule.uses.clear();
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'));

    config.module
      .rule('mjs')
      .test(/\.m?js$/)
      .include.add(/node_modules\/pdfjs-dist/) // 只处理指定的目录，以加快构建速度
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: ['@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-class-properties', // 支持类属性声明
          '@babel/plugin-proposal-private-methods', // 支持私有方法声明
          '@babel/plugin-proposal-optional-chaining', // 支持可选链操作符
          '@babel/plugin-syntax-dynamic-import', // 支持动态导入
          '@babel/plugin-syntax-import-meta' // 支持import.meta
        ]
      });
  }
};
