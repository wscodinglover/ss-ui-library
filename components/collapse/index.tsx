/**
 * ################################################################################
 * # ModuleName: Collapse 折叠面板
 * # catalog: 数据提示组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * ################################################################################
 * # Component API新增或修改:
 * # className    自定义class名称            @type{string}       @default[ss-collapse]
 * #################################################################################
 * */

import React from 'react';
import { Collapse } from 'antd';
import { CollapseProps } from 'antd/lib/collapse';
import classnames from 'classnames';

const { Panel } = Collapse;

interface SSCollapseProps extends CollapseProps {
  className?: string;
}

class SSCollapse extends React.PureComponent<SSCollapseProps, any> {
  static Panel: React.ComponentProps<any>;

  render() {
    const { className, children, ...reset } = this.props;
    const CollapseParams = {
      className: classnames('ss-collapse', className),
      ...reset,
    };
    return <Collapse {...CollapseParams}>{children}</Collapse>;
  }
}

// 将palel绑定到collapse上
SSCollapse.Panel = Panel;

export default SSCollapse;
