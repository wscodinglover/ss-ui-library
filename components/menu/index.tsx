import React from 'react';
import {Menu} from 'antd'
import classNames from 'classnames';

const { SubMenu, Item, ItemGroup } = Menu;

type MenuProps = {
  className: string | undefined,
  dataSource: [object],
  children: React.ReactNode
}

type DataSourceProps = {
  key: string | number | undefined,
  icon: string
  title: React.ReactNode | string,
  show: boolean,
  disabled: boolean,
  children: [object]
}

type DataSourceChildProps = {
  key: string | number | undefined,
  icon: string
  title: React.ReactNode | string,
  show: boolean,
  disabled: boolean,
  children: [object]
}

// eslint-disable-next-line react/prefer-stateless-function
class SS_Menu extends React.Component<MenuProps, any> {
  static Item: any;

  static SubMenu: any;

  static ItemGroup: any;

  render() {
    const {className, dataSource, children, ...reset} = this.props;
    return (
      // @ts-ignore
      <Menu
        className={classNames('ss-inline-menu ss-inline-menu-basic', className)}
        {...reset}>
        {children}
        {
          dataSource && dataSource.map((item: DataSourceProps, index: number) => {
            if (item.children && item.children.length) {
              // 剔除show为false的情况
              return item.show && (
                <SubMenu
                  popupClassName="ss-menu-popup"
                  key={item.key || `sub${Date.now()}${index}`}
                  title={item.title}
                  disabled={item.disabled || false}>
                  {
                    item.children.map((child: DataSourceChildProps, cindex: number) => {
                      // 剔除show为false的情况
                      return child.show && (
                        <Menu.Item key={child.key || `child-${Date.now()}-${index}-${cindex}`}
                                   disabled={child.disabled || false}>
                          {child.title}
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            }

            // 剔除show为false的情况
            return item.show && (
              <Menu.Item
                key={item.key || `sub${Date.now()}${index}`}
                disabled={item.disabled || false}>
                {item.title}
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
}

SS_Menu.Item = Item;
SS_Menu.ItemGroup = ItemGroup;
SS_Menu.SubMenu = SubMenu;

export default SS_Menu;
