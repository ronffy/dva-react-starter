const { Mock, config } = require('./common');

const { apiPre } = config

let postId = 0
const data = Mock.mock({
  'data|10': [
    {
      id() {
        postId += 1
        return postId + 10000
      },
      title: '@cname',
    },
  ],
}).data

module.exports = {
  [`${apiPre}/_test`](req, res) {
    setTimeout(() => {
      res.json(data)
    }, 1000);
  },
}