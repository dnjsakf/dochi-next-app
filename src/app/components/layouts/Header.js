"use client";

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

import { useAppDispatch } from '@/app/store/hooks';
import { toggleCollapsed, selectCollapsed } from "../../store/sideBarSlice";

const Header = ( props ) => {

  const dispatch = useAppDispatch();
  const collapsed = selectCollapsed();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleToggleCollapsed = () => {
    dispatch(toggleCollapsed());
  }
  
  return (
    <Layout.Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleToggleCollapsed}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
};

export default Header;