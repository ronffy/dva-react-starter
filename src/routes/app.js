/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { Layout } from 'antd';
const { Content, Sider } = Layout;
import { Header, Menus, Breadcrumbs, Footer } from '../components';
import '../themes/index.less'
import './app.less'
import Error from './error'

const App = ({ children, dispatch, app, loading, location }) => {

  return (
    <Layout>
      <Header location={location} />
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menus />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumbs />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
