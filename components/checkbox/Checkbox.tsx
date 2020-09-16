import React from 'react';
import {Checkbox} from 'antd';
import classNames from 'classnames';

interface CheckboxProps {
  className: string
}

const SS_Checkbox = (props: CheckboxProps) => {
  const {className, ...reset} = props;
  return (
    <Checkbox
      className={classNames("ss-checkbox-wrap", className)}
      {...reset}
    />
  )
}

export default SS_Checkbox;
