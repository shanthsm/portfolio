import React from 'react';
import ChatbaseScript from '../components/ChatbaseScript';

const Layout = ({ children }) => {
  return (
    <>
      <ChatbaseScript />
      {children}
    </>
  );
};

export default Layout;