import React from 'react';
import classNames from 'classnames';
import { Tree } from 'antd';

const {TreeNode} = Tree;

type TreeProps = {
  className: string,
  switcherIcon: React.ReactNode,
  basicSwitcherIcon: any
  children: React.ReactNode,
}

// basic主题自定义switcher icon
function BasicSwitcherIconRender (props: any) {
  const {basicSwitcherIcon} = props;
  return (
    <>
      <span className="ss-switcher-icon-open">{basicSwitcherIcon.open || <span className="sumscope-icon">&#xe768;</span>}</span>
      <span className="ss-switcher-icon-close">{basicSwitcherIcon.close || <span className="sumscope-icon">&#xe769;</span>}</span>
    </>
  )
}

function SS_Tree (props: TreeProps) {
  const {className, switcherIcon, basicSwitcherIcon, children, ...reset} = props;

  let _switcherIcon: any
  if (switcherIcon) {
    _switcherIcon = switcherIcon
  }
  if (basicSwitcherIcon) {
    _switcherIcon = <BasicSwitcherIconRender basicSwitcherIcon={basicSwitcherIcon} />
  }

  return (
    // @ts-ignore
    <Tree
      className={classNames('ss-tree', className)}
      switcherIcon={_switcherIcon}
      {...reset}
    >
      {children}
    </Tree>
  )
}

SS_Tree.TreeNode = TreeNode;

export default SS_Tree;
