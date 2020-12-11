import React from 'react';
import { Menu } from 'antd';
import classnames from 'classnames';

const { SubMenu } = Menu;

class SSSubMenu extends React.PureComponent<any, any> {
  render() {
    const { className, popupClassName, children, ...reset } = this.props;
    const SubMenuParams = {
      className,
      popupClassName: classnames('ss-menu-sub-popup', popupClassName),
      ...reset,
    };
    return <SubMenu {...SubMenuParams}>{children}</SubMenu>;
  }
}

export default SSSubMenu;
