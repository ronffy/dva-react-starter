/* global window */
import React from 'react'
import { connect } from 'dva'

const Home = () => {

  return (
    <div>
      whr:i am home comp
    </div>
  )
}

export default connect(({ app, loading }) => ({ app, loading }))(Home)
