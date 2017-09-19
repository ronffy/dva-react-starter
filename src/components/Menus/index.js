import React from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu, Item } = Menu;
import { Link } from 'dva/router';

function Menus() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
        <Item key="1">option1</Item>
        <Item key="2">option2</Item>
        <Item key="3">option3</Item>
        <Item key="4">option4</Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
        <Item key="5">option5</Item>
        <Item key="6">option6</Item>
        <Item key="7">option7</Item>
        <Item key="8">option8</Item>
      </SubMenu>
    </Menu>
  );
}

export default Menus;
