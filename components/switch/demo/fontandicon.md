---
order: 2
title:
  zh-CN: 文字和图标
  en-US: 文字和图标
---

## zh-CN

带有文字和图标。

## en-US

带有文字和图标。

```jsx
import { Switch, Icon } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<Icon value="&#xe76e;" />}
      unCheckedChildren={<Icon value="&#xe777;" />}
      defaultChecked
    />
  </div>,
  mountNode,
);
```
