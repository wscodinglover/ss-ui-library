/**
 * ################################################################################
 * # ModuleName: Menu 菜单
 * # catalog: 导航组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * ################################################################################
 * # Component API新增或修改:
 * # className    自定义class名称            @type{string}       @default[ss-btn]
 * # dataSource   数据配置项                 @type{object[]}     @default[]
 * # show         每层结构都有，是否需要
 *                显示                      @type{object[]}     @default[]
 * # group        dataSource存在时生效，
 *                需要渲染GroupItem时添加     @type{object[]}     @default[]
 * #################################################################################
 * */

import React, { ReactNode } from 'react';
import { Menu } from 'antd';
import {MenuProps} from 'antd/lib/menu'
import classnames from 'classnames';
import SSSubMenu from './SubMenu';

const { ItemGroup, Item } = Menu;

interface SSMenuProps extends MenuProps {
  className: string;
  dataSource: object[];
}

type GroupItemProps = {
  key?: string | number;
  title: string | ReactNode;
  show: boolean;
  children: object[];
};

type MenuItemProps = {
  key?: string | number;
  title: string | ReactNode;
  show: boolean;
  group: GroupItemProps;
  children: object[];
};

class SSMenu extends React.PureComponent<SSMenuProps, any> {
  static Item: React.ComponentProps<any>;

  static SubMenu: React.ComponentProps<any>;

  static ItemGroup: React.ComponentProps<any>;

  /**
   * GroupItem dataSource dom render
   *
   * */
  private GroupItemRender = (group: GroupItemProps): ReactNode => {
    if (group && JSON.stringify(group) !== '{}') {
      const groupChildren: object[] = group.children;
      const groupShow: boolean = group.show;
      delete group.show;
      return (
        groupShow && (
          // @ts-ignore
          <ItemGroup {...group}>
            {groupChildren.length &&
              groupChildren.map((child: MenuItemProps) => {
                const childTitle: string | ReactNode = child.title;
                const childShowIndex: number = child.show ? 1 : 0;
                delete child.show;
                return childShowIndex ? <Item {...child}>{childTitle}</Item> : null;
              })}
          </ItemGroup>
        )
      );
    }
  };

  /**
   * dataSource dom render
   *
   * */
  private menuItemRender = (): ReactNode => {
    const { dataSource } = this.props;
    return dataSource.map((item: MenuItemProps) => {
      const { show, title, children, group, ...reset } = item;
      const showIndex = show ? 1 : 0;
      if (children && children.length) {
        return (
          showIndex && (
            <SSSubMenu title={title} {...reset}>
              {children.length &&
                children.map((child: MenuItemProps) => {
                  const childTitle: string | ReactNode = child.title;
                  const childShowIndex: number = child.show ? 1 : 0;
                  delete child.show;
                  return childShowIndex && <Item {...child}>{childTitle}</Item>;
                })}
              {this.GroupItemRender(group)}
            </SSSubMenu>
          )
        );
      }
      return showIndex && <Item {...reset}>{title}</Item>;
    });
  };

  render() {
    const { className, children, dataSource, ...reset } = this.props;
    const MenuParams = {
      className: classnames('ss-menu', className),
      ...reset,
    };
    return (
      <Menu {...MenuParams}>
        {children}
        {dataSource && dataSource.length && this.menuItemRender()}
      </Menu>
    );
  }
}

/**
 * 子组件挂载，ts需要定义类型
 *
 * */
SSMenu.SubMenu = SSSubMenu;
SSMenu.Item = Item;
SSMenu.ItemGroup = ItemGroup;

export default SSMenu;
