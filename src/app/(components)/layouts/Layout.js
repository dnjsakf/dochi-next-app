"use client";

import React from 'react';
import styled from 'styled-components';
import { Layout, theme } from 'antd';

import GlobalStyle from '../../styles/global-styles';

import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const MainLayout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <SideBar />
      <Layout>
        <Header />
        <Layout.Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          { children }
        </Layout.Content>
        <Footer />
      </Layout>
    </StyledLayout>
  );
};

export default MainLayout;