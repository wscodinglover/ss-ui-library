/**
 * ##################################################################
 * # ModuleName: Button 按钮
 * # catalog: 通用组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # className  自定义class名称    @type{string}       @default[ss-btn]
 * # basic      深绿色主题         @type{boolean}      @default[false]
 * # yellow     温暖主题           @type{boolean}      @default[false]
 * # error      错误主题           @type{boolean}      @default[false]
 * # gray       灰色主题           @type{boolean}      @default[false]
 * # icon       内置图标           @type{string}       @default[]
 * ##################################################################
 * */

import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';

// 类型定义
type ButtonProps = {
  className: string;
  basic: false;
  yellow: false;
  error: false;
  gray: false;
  icon: string;
};

const SSButton: React.FC<ButtonProps> = props => {
  const { className, basic, yellow, error, gray, icon, children, ...reset } = props;
  // 定义主题class
  const classNames =
    (basic && 'bsaic') || (yellow && 'yellow') || (error && 'error') || (gray && 'gray');
  // Button所需的参数
  const ButtonParams = {
    className: classnames('ss-btn', `ss-btn-${classNames}`, className),
    ...reset,
  };
  // 图标
  const IconDom = <span className="sumscope-icon icon-ss-item">{icon}</span>;
  return (
    <Button {...ButtonParams}>
      {icon && IconDom}
      {children}
    </Button>
  );
};

export default SSButton;
