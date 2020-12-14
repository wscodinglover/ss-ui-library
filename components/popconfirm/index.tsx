/**
 * ############################################################################################
 * # ModuleName: Popconfirm 气泡确认框
 * # catalog: 反馈组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * ############################################################################################
 * # Component API新增或修改:
 * # overlayClassName   提示框容器的自定义class      @type{string}               @default[ss-popover]
 * # icon               自定义弹出气泡 Icon 图标     @type{string}               @default[]
 * # width              气泡框的width定义           @type{number | string}      @default[300]
 * #############################################################################################
 * */
import React from 'react';
import { Popconfirm } from 'antd';
import { PopconfirmProps } from 'antd/lib/popconfirm';
import SSIcon from 'ss-ui-library/es/icon';
import classnames from 'classnames';

interface SSPopconfirmProps extends PopconfirmProps {
  overlayClassName?: string;
  icon?: string;
  width?: number | string;
}

const SSPopconfirm: React.FC<SSPopconfirmProps> = props => {
  const { overlayClassName, icon, width, overlayStyle, children, ...reset } = props;
  const PopconfirmParams = {
    overlayClassName: classnames('ss-popover', overlayClassName),
    icon: icon ? <SSIcon value={icon} /> : icon !== null && <SSIcon value="&#xe841;" />,
    overlayStyle: Object.assign(overlayStyle || {}, {
      width: `${width}${typeof width === 'number' ? 'px' : ''}`,
    }),
    ...reset,
  };
  return <Popconfirm {...PopconfirmParams}>{children}</Popconfirm>;
};

SSPopconfirm.defaultProps = {
  width: 300,
};

export default SSPopconfirm;
