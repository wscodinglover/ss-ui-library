import React from 'react';
import {Collapse} from 'antd';
import classNames from 'classnames';

const { Panel } = Collapse;

type CollapseProps = {
  className: string,
  children: React.ReactNode
}

function SS_Collapse (props: CollapseProps) {
  const {className,children, ...reset} = props;
  return (
    <Collapse
      className={classNames(className, 'ss-collapse')}
      {...reset}>
      {children}
    </Collapse>
  )
}

// 将palel绑定到collapse上
SS_Collapse.Panel = Panel;

export default SS_Collapse;
