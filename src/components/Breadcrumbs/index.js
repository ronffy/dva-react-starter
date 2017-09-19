import React from 'react';
import { Breadcrumb } from 'antd';
const { Item } = Breadcrumb;

function Breadcrumbs() {
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      <Item>Home</Item>
      <Item>List</Item>
      <Item>App</Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
