"use client";

import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Dochi
    </Layout.Footer>
  );
};

export default Footer;