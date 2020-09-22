import React from 'react';
import {TreeSelect, ConfigProvider } from 'antd';
import classNames from 'classnames';
import SS_Empty from '../empty';

const {TreeNode, SHOW_PARENT, SHOW_ALL} = TreeSelect;

interface TreeSelectProps {
  className: string,
  dropdownClassName: string,
  renderEmptyNode: React.ReactNode,
}

// 默认清除图标
const DefaultClearIcon = () => <span className="sumscope-icon ss-clear-icon">&#xe777;</span>;

// eslint-disable-next-line react/prefer-stateless-function
class SS_Tree_Select extends React.Component<TreeSelectProps, any> {
  static TreeNode: any;

  static SHOW_PARENT: any;

  static SHOW_ALL: any;

  render() {
    const {className, dropdownClassName, renderEmptyNode, children, ...reset} = this.props;
    return (
      // @ts-ignore
      // eslint-disable-next-line react/jsx-pascal-case
      <ConfigProvider renderEmpty={() => renderEmptyNode || <SS_Empty />}>
        <TreeSelect
          className={classNames('ss-tree-select', className)}
          dropdownClassName={classNames('ss-tree-select-dropdown', dropdownClassName)}
          clearIcon={<DefaultClearIcon />}
          {...reset}
        >
          {children}
        </TreeSelect>
      </ConfigProvider>
    )
  };
}

SS_Tree_Select.TreeNode = TreeNode;
SS_Tree_Select.SHOW_PARENT = SHOW_PARENT;
SS_Tree_Select.SHOW_ALL = SHOW_ALL;

export default SS_Tree_Select;
