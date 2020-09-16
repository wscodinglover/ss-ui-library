---
order: 6
title:
  zh-CN: 密码框
  en-US: 密码框
---

## zh-CN

密码框，增加显示与不显示切换按钮图标。

## en-US

密码框，增加显示与不显示切换按钮图标。

```jsx
import { Input } from 'ss-ui-library';

const {Password} = Input;

ReactDOM.render(
  <div className="example">
    <h4>显示显示切换图标</h4>
    <Password placeholder="请输入密码" />
    <h4>不显示显示切换图标</h4>
    <Password placeholder="请输入密码" visibilityToggle={false} />
  </div>
, mountNode);
```
