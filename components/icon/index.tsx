/**
 * ##################################################################
 * # ModuleName: Icon 图标
 * # catalog: 通用组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # className  自定义class名称        @type{string}           @default[ss-icon-item]
 * # value      icon 的 unicode 值    @type{string}           @default[]
 * # fontSize   icon 大小自定义        @type{string | number}  @default[12]
 * # color      icon 颜色自定义        @type{string}           @default[]
 * ##################################################################
 * */

import React from 'react';
import classnames from 'classnames';

interface SSIconProps {
  className?: string;
  value?: string;
  fontSize?: string | number;
  color?: string;
}

const SSIcon: React.FC<SSIconProps> = props => {
  const { className, value, fontSize, color, ...reset } = props;
  const style = {
    fontSize: typeof fontSize === 'string' ? fontSize : `${fontSize}px`,
    color,
  };
  const IconParams = {
    className: classnames('sumscope-icon icon-ss-item', className),
    style,
    ...reset,
  };
  return <span {...IconParams}>{value}</span>;
};

export default SSIcon;
