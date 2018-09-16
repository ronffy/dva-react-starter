/* global window */
import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { withRouter } from 'dva/router'
import './app.less'
let lastHref

class App extends React.Component {
  static defaultPropTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func,
    app: PropTypes.object,
    loading: PropTypes.object,
  }
 
  render(){
    const { children, loading } = this.props;
    
    const href = window.location.href

    if (lastHref !== href) {
      NProgress.start()
      if (!loading.global) {
        NProgress.done()
        lastHref = href
      }
    }
  
    return (
      <div>
        <div>
          <Link to="/_test">go to test</Link>
          <br />
          <Link to="/home">go to home</Link>
          {
            children
          }
        </div>
      </div>
    )
  }
}

export default withRouter(connect(({ app, materialReview, loading }) => ({ app, materialReview, loading }))(App))
