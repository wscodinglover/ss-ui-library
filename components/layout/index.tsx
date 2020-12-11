/**
 * ##################################################################
 * # ModuleName: Layout 布局
 * # catalog: 布局组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # 暂无
 * ##################################################################
 * */
import React from 'react';
import { Layout } from 'antd';
import classnames from 'classnames';

const { Header, Footer, Sider, Content } = Layout;

const SSLayout = (props: any) => {
  const { className, children, ...reset } = props;
  return (
    <Layout className={classnames('ss-layout', className)} {...reset}>
      {children}
    </Layout>
  );
};

SSLayout.Header = Header;
SSLayout.Footer = Footer;
SSLayout.Sider = Sider;
SSLayout.Content = Content;

export default SSLayout;
