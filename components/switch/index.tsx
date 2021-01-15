import React from 'react';
import { Switch } from 'antd';
import classNames from 'classnames';

interface SwitchProps {
  className: string;
}

const SSSwitch = (props: SwitchProps) => {
  const { className, ...reset } = props;
  return <Switch className={classNames('ss-switch', className)} {...reset} />;
};

export default SSSwitch;
