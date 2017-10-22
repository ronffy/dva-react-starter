import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/home'
import { model } from 'models/common'
// import * as weatherService from 'services/weather'

export default modelExtend(model, {
  namespace: 'home',
  state: {
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/home' || pathname === '/') {
          // dispatch({ type: 'query' })
          // dispatch({ type: 'queryWeather' })
        }
      })
    },
  },
  effects: {
    * query ({
      payload,
    }, { call, put }) {
      // const data = yield call(query, parse(payload))
      // yield put({
      //   type: 'updateState',
      //   payload: data,
      // })
    },
  },
})
