import React from 'react';
import {Layout} from 'antd';
import classNames from 'classnames';

const { Header, Footer, Sider, Content } = Layout;

const SS_Layout = (props: any) => {
  const {className, children, ...reset} = props
  return (
    <Layout
      className={classNames('ss-layout', className)}
      {...reset}
    >
      {children}
    </Layout>
  )
}

SS_Layout.Header = Header;
SS_Layout.Footer = Footer;
SS_Layout.Sider = Sider;
SS_Layout.Content = Content;

export default SS_Layout
