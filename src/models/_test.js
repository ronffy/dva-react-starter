/**
 * test测试、demo，不会到生产
 * @author ronffy
 */
import { commonExtend } from 'models/common';
import { query } from '../services/_test';

export default commonExtend({

  namespace: '_test',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === '/_test') {
          dispatch({ type: 'fetch' });
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      let { data } = yield call(query);
      yield put({ 
        type: 'updateState',
        payload: {
          list: data
        }
      })
    },
  },

});
