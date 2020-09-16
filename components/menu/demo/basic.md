---
order: 0
title:
  zh-CN: 内嵌菜单
  en-US: 内嵌菜单
---

## zh-CN

垂直菜单，子菜单内嵌在菜单区域。

## en-US

垂直菜单，子菜单内嵌在菜单区域。

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
      mode="inline"
      style={{width: 256}} />
  </>,
  mountNode,
);
```
