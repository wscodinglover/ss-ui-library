import React from 'react';
import {Select, ConfigProvider } from 'antd';
import classNames from 'classnames';
import SS_Empty from '../empty';

const {Option, OptGroup} = Select

type SelectProps = {
  className: string,
  dropdownClassName: string,
  clearIcon?: React.ReactNode,
  renderEmptyNode: React.ReactNode
  children: React.ReactNode
}

// 默认清除图标
const DefaultClearIcon = () => <span className="sumscope-icon ss-clear-icon">&#xe777;</span>;

// eslint-disable-next-line react/prefer-stateless-function
class SS_Select extends React.Component<SelectProps, any> {
  static Option: React.ClassicComponentClass<unknown>;

  static OptGroup: React.ClassicComponentClass<unknown>;

  render() {
    const {className, dropdownClassName, clearIcon, renderEmptyNode, children, ...reset} = this.props;
    return (
      // @ts-ignore
      // eslint-disable-next-line react/jsx-pascal-case
      <ConfigProvider renderEmpty={() => renderEmptyNode || <SS_Empty />}>
        <Select
          className={classNames('ss-select', className)}
          dropdownClassName={classNames('ss-select-dropdown', dropdownClassName)}
          clearIcon={clearIcon || <DefaultClearIcon />}
          {...reset}
        >
          {children}
        </Select>
      </ConfigProvider>
    )
  };
}

SS_Select.Option = Option;
SS_Select.OptGroup = OptGroup;

export default SS_Select;
