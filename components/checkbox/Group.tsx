import React from 'react';
import {Checkbox} from 'antd';
import classnames from 'classnames';

const {Group} = Checkbox;

type CheckboxGroupProps = {
  className: string
}

const SSCheckboxGroup: React.FC<CheckboxGroupProps> = props => {
  const {className, ...reset} = props;
  return (
    <Group
      className={classnames(className, "ss-checkbox-wrap-group")}
      {...reset}
    />
  )
};

export default SSCheckboxGroup;
