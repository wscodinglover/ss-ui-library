import React from 'react';
import {Alert} from 'antd';
import classNames from 'classnames';

const SS_Alert = (props: any) => {
  const {className, icon, closeText, ...reset} = props;
  return (
    <Alert
      className={classNames('ss-alert', className)}
      icon={icon || <span className="sumscope-icon">&#xe841;</span>}
      closeText={closeText || <div className="ss-clear-icon"><span className="sumscope-icon">&#xe777;</span></div>}
      {...reset} />
  )
}

export default SS_Alert
