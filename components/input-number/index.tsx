import React from 'react';
import {InputNumber} from 'antd'
import classNames from 'classnames';

interface InputNumberProps {
  className: string
}

const SS_InputNumber: React.FC<InputNumberProps> = (props) => {
  const {className, ...reset} = props;

  return (
    <InputNumber
      className={classNames('ss-inputnumber', className)}
      {...reset}
    />
  )
}

export default SS_InputNumber;
