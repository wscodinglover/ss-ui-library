import React from 'react';
import {Checkbox} from 'antd';
import classNames from 'classnames';

const {Group} = Checkbox;

interface CheckboxProps {
  className: string
}

const SS_Checkbox_Group = (props: CheckboxProps) => {
  const {className, ...reset} = props;
  return (
    <Group
      className={classNames(className, "ss-checkbox-wrap-group")}
      {...reset}
    />
  )
}

export default SS_Checkbox_Group;
