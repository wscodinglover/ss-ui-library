import React from 'react';
import { Radio } from 'antd';
import { RadioGroupProps } from 'antd/lib/radio';
import classnames from 'classnames';

interface SSRadioGroupProps extends RadioGroupProps {
  className?: string;
  vertical?: boolean;
}

const SSRadioGroup: React.FC<SSRadioGroupProps> = props => {
  const { className, vertical, children, ...reset } = props;
  const GroupParams = {
    className: classnames('ss-radio-group', { 'ss-radio-group-vertical': vertical }, className),
    ...reset,
  };
  return <Radio.Group {...GroupParams}>{children}</Radio.Group>;
};

export default SSRadioGroup;
