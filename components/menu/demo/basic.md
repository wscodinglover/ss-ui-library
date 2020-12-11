---
order: 0
title:
  zh-CN: 基本使用
  en-US: 基本使用
---

## zh-CN

使用 `Menu` 提供的自组建进行渲染， 同时也提供了一个 dataSource 将数据内部一次性渲染方式。

## en-US

使用 `Menu` 提供的自组建进行渲染， 同时也提供了一个 dataSource 将数据内部一次性渲染方式。

```jsx
import { Menu } from 'ss-ui-library';

const { SubMenu } = Menu;

ReactDOM.render(
  <Menu mode="horizontal">
    <Menu.Item key="item 1">item 1</Menu.Item>
    <Menu.Item key="item 2">item 1</Menu.Item>
    <SubMenu title="sub menu 1">
      <Menu.ItemGroup title="Item group 1">
        <Menu.Item key="sub menu item 1">sub menu item 1</Menu.Item>
        <Menu.Item key="sub menu item 2">sub menu item 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Item group 2">
        <Menu.Item key="sub menu item 3">sub menu item 3</Menu.Item>
        <Menu.Item key="sub menu item 4">sub menu item 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
  </Menu>,
  mountNode,
);
```
