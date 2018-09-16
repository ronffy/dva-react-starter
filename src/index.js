import dva from 'dva';
import createLoading from 'dva-loading'
import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use({
  ...createLoading({
    effects: true,
  })
});

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
