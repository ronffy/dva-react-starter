import React from 'react';
import { Layout } from 'antd';
import { Link } from 'dva/router';

function Footer() {
  return (
    <Layout.Footer style={{ textAlign: 'center', background: '#404040', color: '#bcbcbc'}}>
      我是底部，我在Footer组件内配置
    </Layout.Footer>
  );
}

export default Footer;
