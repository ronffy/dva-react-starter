const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'laptop',
    name: 'Home',
    route: '/home',
  },
  {
    id: '5',
    bpid: '1',
    name: 'chart',
    icon: 'code-o',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: 'channel',
    icon: 'line-chart',
    route: '/chart/channel',
  }
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
