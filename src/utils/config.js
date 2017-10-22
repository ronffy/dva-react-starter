const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'Sunlands',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    user: `${APIV1}/user/:id`,
    home: `${APIV1}/home`,
    menus: `${APIV1}/menus`,
  },
}
