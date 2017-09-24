import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default function ({ location }) {
  return (
    <Header style={{ color: '#fff'}}>
      我是logo
    </Header>
  );
}

