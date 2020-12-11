/**
 * ##################################################################
 * # API
 * prefixCls: 设置统一样式前缀    @type{string}     @default[ss]
 *
 *
 *
 * ##################################################################
 * */

import React from 'react';
import { ConfigProvider } from 'antd';

type ConfigProviderProps = {};

const SSConfigProvider: React.FC<ConfigProviderProps> = props => {
  const { children } = props;
  const ProviderProps = {
    prefixCls: 'ss',
  };
  return <ConfigProvider {...ProviderProps}>{children}</ConfigProvider>;
};

export default SSConfigProvider;
