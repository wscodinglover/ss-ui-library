---
order: 0
title:
  zh-CN: 基本
  en-US: Basic Usage
---

## zh-CN

最简单的下拉菜单。

## en-US

最简单的下拉菜单。

```jsx
import { Menu, Dropdown } from 'ss-ui-library';

const MenuData = [
  {
      key: 1,
      title: '菜单1',
      show: true,
  },
  {
      key: 2,
      title: '菜单2',
      show: true,
  },
  {
      key: 3,
      title: '菜单3',
      show: true,
  },
]

const menu = (
  <Menu dataSource={MenuData} />
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me
    </a>
  </Dropdown>,
  mountNode,
);
```
