const path = require('path')
const { version } = require('./package.json')

// const svgSpriteDirs = [
//   path.resolve(__dirname, 'src/svg/'),
//   require.resolve('antd').replace(/index\.js$/, '')
// ]

export default {
  entry: 'src/index.js',
  // svgSpriteLoaderDirs: svgSpriteDirs,
  // theme: "./theme.config.js",
  theme: {
    '@primary-color': '#00a2ae',
    '@link-color': '#00a2ae',
  },
  publicPath: `/${version}/`,
  outputPath: `./dist/${version}`,
  // 接口代理示例
  // proxy: {
  //   // "/api/v2": {
  //   //   "target": "http://192.168.0.110",
  //   //   "changeOrigin": true,
  //   //   "pathRewrite": { "^/api/v2" : "/api/v2" }
  //   // }
  // },
  "autoprefixer": {
    "browsers": [
      "> 1%",
      "last 2 versions"
    ]
  },
  env: { //server 的环境变量是 development，build 的环境变量是 production。
    development: { //开发环境有dva-hmr
      extraBabelPlugins: [ //配置额外的 babel plugin
        "dva-hmr",
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    },
    production: { //生产环境无dva-hmr，减少冗余代码
      extraBabelPlugins: [
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    }
  },
  dllPlugin: {
    exclude: ["babel-runtime", "roadhog", "cross-env"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  }
}
