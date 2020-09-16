---
order: 2
title:
  zh-CN: 垂直菜单
  en-US: 垂直菜单
---

## zh-CN

子菜单是弹出的形式。

## en-US

子菜单是弹出的形式。

```jsx
import { Menu, Icon } from 'ss-ui-library';

const muneData = [
    {
        key: 0,
        title: <span><Icon value="&#xe773;" />菜单1</span>,
        show: true,
        disabled: true,
    },
    {
        key: 1,
        title: <span><Icon value="&#xe773;" />菜单2</span>,
        show: true,
        children: [
            {
                key: "sub1",
                title: <span><Icon value="&#xe773;" />菜单2的sun item 1</span>,
                show: true,
                disabled: true
            },
            {
                key: "sub2",
                title: '菜单2的sun item 2',
                show: true,
            },
            {
                key: "sub3",
                title: '菜单2的sun item 3',
                show: true,
                disabled: true,
            },
        ]
    },
    {
        key: 2,
        title: '菜单3',
        show: true,
        children: [
            {
                title: '菜单3的sun item 1',
                show: true,
            },
            {
                title: '菜单3的sun item 2',
                show: true,
            },
            {
                title: '菜单3的sun item 3',
                show: true,
            },
        ]
    },
    {
        key: 3,
        title: '菜单4',
        show: true,
    },
]

ReactDOM.render(
  <>
    <Menu
      defaultOpenKeys={['1']}
      defaultSelectedKeys={['sub1']}
      dataSource={muneData}
      mode="vertical"
      style={{width: 256}} />
  </>,
  mountNode,
);
```
