import React from 'react';
import {Button} from 'antd'
import classNames from 'classnames';

/*
* @notice: 基于antd Button组件，以下是自定义新增部分
* @params: {Boolean} basic   深绿色主题
* @params: {Boolean} yellow  温暖主题
* @params: {Boolean} error   错误主题
* @params: {Boolean} gray    灰色主题
*
* */

interface ButtonProps {
  basic: boolean,
  yellow: boolean,
  error: boolean,
  gray: boolean,
  icon: string,
  children: React.ReactNode
}

const SS_Button: React.FC<ButtonProps> = (props) => {
  const {basic, yellow, error, gray, icon, children, ...reset} = props;

  return (
    <Button
      className={classNames('ss-btn',
        {'ss-btn-basic': basic},
        {'ss-btn-yellow': yellow},
        {'ss-btn-error': error},
        {'ss-btn-gray': gray})}
      {...reset}>
      {icon && <span className="sumscope-icon ss-btn-icon">{icon}</span>}
      {children}
    </Button>
  )
}

SS_Button.defaultProps = {
  basic: false,
  yellow: false,
  error: false,
  gray: false,
}

export default SS_Button;
