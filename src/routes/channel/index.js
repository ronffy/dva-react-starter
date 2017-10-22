import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { color } from 'utils'
import styles from './index.less'

function Home ({ home, loading }) {
  return (
    <div>
      我是channel
    </div>
  )
}

Home.propTypes = {
  home: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ home, loading }) => ({ home, loading }))(Home)
