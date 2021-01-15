import React from 'react';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/lib/input-number';
import classNames from 'classnames';

const SSInputNumber: React.FC<InputNumberProps> = props => {
  const { className, ...reset } = props;
  const InputParams = {
    className: classNames('ss-inputnumber', className),
    ...reset,
  };
  return <InputNumber {...InputParams} />;
};

export default SSInputNumber;
