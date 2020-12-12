/**
 * ##################################################################
 * # ModuleName: Dropdown 下拉菜单
 * # catalog: 导航组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # className          自定义class名称    @type{string}       @default[ss-btn]
 * ##################################################################
 * */
import React from 'react';
import {Dropdown} from 'antd';
import classnames from 'classnames';

const SSDropDown: React.FC<any> = props => {
  const {className, overlayClassName, children, ...reset} = props;
  return (
    <Dropdown
      className={classnames('ss-dropdown', className)}
      overlayClassName={classnames('ss-dropdown-overlay', overlayClassName)}
      {...reset}
    >
      {children}
    </Dropdown>
  )
}

export default SSDropDown;
