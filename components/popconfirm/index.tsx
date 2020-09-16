import React from 'react';
import {Popconfirm} from "antd";
import classNames from 'classnames';

interface PopconfirmProps {
  className: string,
  icon?: React.ReactNode | null,
  title?: React.ReactNode,
  okText?: string,
  children: React.ReactNode
}

interface PopconfirmTitleProps {
  children: React.ReactNode
}

// 气泡框标题内容
const PopconfirmTitle = (props: PopconfirmTitleProps) => {
  return (
    <div key={Date.now()}>{props.children}</div>
  )
}

const SS_Popconfirm = (props: PopconfirmProps) => {
  const {className, title, icon, okText, children, ...reset} = props
  return (
    <Popconfirm
      icon={icon ? <span className="sumscope-icon">{icon}</span> : icon !== null && <span className="sumscope-icon">&#xe841;</span>}
      title={<PopconfirmTitle>{title}</PopconfirmTitle>}
      okText={okText || "确定"}
      arrowPointAtCenter
      overlayClassName={classNames(className, 'ss-popconfirm')}
      {...reset}>
      {children}
    </Popconfirm>
  )
};

export default SS_Popconfirm;
