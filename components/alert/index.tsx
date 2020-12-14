/**
 * ##################################################################
 * # ModuleName: Alert 警示提示
 * # catalog: 反馈组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # className  自定义class名称    @type{string}       @default[ss-alert]
 * # icon       自定义图标         @type{string|ReactNode}      @default[]
 * # closeText  自定义关闭按钮     @type{string|ReactNode}      @default[]
 * ##################################################################
 * */

import React from 'react';
import { Alert } from 'antd';
import { AlertProps } from 'antd/lib/alert';
import Icon from 'ss-ui-library/es/icon';
import classnames from 'classnames';

interface SSAlertProps extends AlertProps {
  className?: string;
  icon?: string | React.ReactNode;
  closeText?: string | React.ReactNode;
}

const SSAlert: React.FC<SSAlertProps> = props => {
  const { className, icon, closeText, closable, ...reset } = props;
  const AlertParams = {
    className: classnames('ss-alert', className),
    // eslint-disable-next-line no-nested-ternary
    icon: icon ? (
      typeof icon === 'string' ? (
        <Icon value={icon} />
      ) : (
        icon
      )
    ) : (
      <Icon value="&#xe841;" />
    ),
    closable,
    closeText: closable ? closeText || <Icon value="&#xe77b;" /> : null,
  };
  return <Alert {...AlertParams} {...reset} />;
};

export default SSAlert;
