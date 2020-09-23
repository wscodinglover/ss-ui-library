import React from 'react';
import {Tooltip} from 'antd';
import classNames from 'classnames';

const SS_Tooltip = (props: any) => {
  const {children, overlayClassName, ...reset} = props;
  return (
    <Tooltip
      overlayClassName={classNames('ss-tooltip-overlay', overlayClassName)}
      {...reset}
    >
      {children}
    </Tooltip>
  )
};

export default SS_Tooltip;
