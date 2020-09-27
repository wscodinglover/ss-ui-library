import React from 'react';
import {Transfer, ConfigProvider } from 'antd';
import classNames from 'classnames';
import SS_Empty from '../empty';

function SS_Transfer (props: any) {
  const {className, renderEmptyNode, children, ...reset} = props;
  return (
    // @ts-ignore
    // eslint-disable-next-line react/jsx-pascal-case
    <ConfigProvider renderEmpty={() => renderEmptyNode || <SS_Empty />}>
      <Transfer
        className={classNames('ss-transfer', className)}
        {...reset}
      >
        {children}
      </Transfer>
    </ConfigProvider>
  )
}

export default SS_Transfer;
