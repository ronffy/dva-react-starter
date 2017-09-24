import React from 'react';
import { connect } from 'dva'
import { Menu, Icon } from 'antd';
const { SubMenu, Item } = Menu;
import { Link } from 'dva/router';

function Menus({ dispatch, locationPathname }) {
  let lastSlashIndex = locationPathname.lastIndexOf('/');

  let menuProps = {
    // onSelect(e){
    //   dispatch({
    //     type: 'app/updateState',
    //     payload: {
    //       locationPathname: e.key
    //     }
    //   });
    // }
  };
  if(lastSlashIndex > 0){
    menuProps.openKeys = [locationPathname.slice(0, lastSlashIndex)]
  }


  return (
    <Menu
      {...menuProps}
      mode="inline"
      theme="light"
      selectedKeys={[locationPathname]}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Item key="/">
          <Link to="/"><Icon type="home" />首页</Link>
      </Item>
      <SubMenu key="/nav1" title={<span><Icon type="user" />nav1</span>}>
        <Item key="/nav1/users">
          <Link to="/nav1/users"><Icon type="bars" />Users</Link>
        </Item>
      </SubMenu>
    </Menu>
  );
}

export default connect(({app: { locationPathname }}) => ({ locationPathname }))(Menus);
