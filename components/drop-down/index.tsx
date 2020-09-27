import React from 'react';
import {Dropdown} from 'antd';
import classNames from 'classnames';

function SS_Dropdown (props: any) {
  const {className, overlayClassName, children, ...reset} = props;
  return (
    <Dropdown
      className={classNames('ss-dropdown', className)}
      overlayClassName={classNames('ss-dropdown-overlay', overlayClassName)}
      {...reset}
    >
      {children}
    </Dropdown>
  )
}

export default SS_Dropdown;
