import React from 'react';
import {Checkbox} from 'antd';
import classnames from 'classnames';

type CheckboxProps = {
  className: string,
}

class SSCheckbox extends React.PureComponent<CheckboxProps, any> {
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
