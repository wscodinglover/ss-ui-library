---
order: 2
title:
  zh-CN: 垂直模式菜单
  en-US: 垂直模式菜单
---

## zh-CN

子菜单是弹出的形式。

## en-US

子菜单是弹出的形式。

```jsx
import { Menu, Icon } from 'ss-ui-library';

const { SubMenu } = Menu;

const dataSource = [
  {
    key: 'item 1',
    show: true,
    title: 'test item 1',
  },
  {
    key: 'item 2',
    show: true,
    title: 'test item 2',
    disabled: true,
  },
  {
    key: 'sub Menu 1',
    show: true,
    title: 'sub menu 1',
    disabled: true,
    children: [
      {
        key: 'sub Menu item 1-1',
        show: true,
        title: 'test item 1',
      },
      {
        key: 'sub Menu item 1-2',
        show: true,
        title: 'test item 2',
      },
    ],
  },
  {
    key: 'sub Menu 2',
    show: true,
    title: 'sub menu 2',
    group: {
      key: 'sub Menu group item 1',
      show: true,
      title: 'sub Menu group item 1',
      children: [
        {
          key: 'sub Menu group item children 1',
          show: true,
          title: 'sub Menu group item children 1',
        },
        {
          key: 'sub Menu group item children 2',
          show: true,
          title: 'sub Menu group item children 2',
        },
      ],
    },
    children: [
      {
        key: 'sub Menu item 2-1',
        show: true,
        title: 'test item 1',
      },
      {
        key: 'sub Menu item 2-2',
        show: true,
        title: 'test item 2',
      },
    ],
  },
];

ReactDOM.render(<Menu dataSource={dataSource} style={{ width: 256 }} mode="vertical" />, mountNode);
```
