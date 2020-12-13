import React from 'react';
import {Checkbox} from 'antd';
import {CheckboxProps} from 'antd/lib/checkbox'
import classnames from 'classnames';

interface SSCheckboxProps extends CheckboxProps {
  className: string,
}

class SSCheckbox extends React.PureComponent<SSCheckboxProps, any> {
  // 定义Group类型
  static Group: React.ComponentProps<any>;

  render () {
    const {className, ...reset} = this.props;
    return (
      <Checkbox
        className={classnames("ss-checkbox-wrap", className)}
        {...reset}
      />
    )
  }
}

export default SSCheckbox;
