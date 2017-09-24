/* global window */
import React from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const Home = ({ dispatch, app }) => {
	const router =() => {
		dispatch(routerRedux.push('/nav1/users'));
		console.log(app)
	}
  return (
    <div onClick={router}>
      whr:i am home comp
    </div>
  )
}

export default connect(({ app, loading, dispatch }) => ({ app, loading, dispatch }))(Home)
