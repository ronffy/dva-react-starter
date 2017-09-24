import queryString from 'query-string'

export default {
  namespace: 'app',
  state: {
  	isShowBreadcrumbs: true, //是否显示面包屑
    locationPathname: '',
    locationQuery: {},
  },
  subscriptions: {

    setupHistory ({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          },
        })
      })
    },

    setup ({ dispatch }) {
      // dispatch({ type: 'query' });
    //   let tid;
    //   window.onresize = () => {
    //     clearTimeout(tid)
    //     tid = setTimeout(() => {
    //       dispatch({ type: 'changeNavbar' })
    //     }, 300)
    //   }
    },

  },
  effects: {
    *query({ payload }, { call, put, select }){
      // yield put({
      //     type: 'updateState',
      //     payload,
      //   })
    }
  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  }
};
