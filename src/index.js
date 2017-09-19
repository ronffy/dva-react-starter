import dva from 'dva';
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import { message } from 'antd';
import 'babel-polyfill'

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
	...createLoading({
    effects: true,
  }),
  history: createHistory(),
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 3. Model Moved to router.js
app.model(require('./models/app'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
