import React from 'react';
import {Radio} from "antd";
import classNames from 'classnames';

interface RadioGroupProps {
  className: string,
  vertical: boolean,
  children: React.ReactNode
}

const SS_Radio_Group = (props: RadioGroupProps) => {
  const {className, vertical, children, ...reset} = props;
  return (
    <Radio.Group
      className={classNames('ss-Radio-wrap-group',
        {'ss-Radio-wrap-group-vertical': !vertical},
        {'ss-Radio-wrap-group-button': children && children[0].type.name},
        className)}
      {...reset}
    >
      {children}
    </Radio.Group>
  )
};

export default SS_Radio_Group;
