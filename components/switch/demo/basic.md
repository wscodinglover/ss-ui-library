---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

最简单的用法。

```jsx
import { Switch } from 'ss-ui-library';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

ReactDOM.render(
  <div className="example">
    <Switch defaultChecked onChange={onChange} />
  </div>,
  mountNode,
);
```
```css
.example {
    padding: 20px;
    background: #1e1e1e;
}
```
<style>
.example h4 {
    color: #fff;
}
.example .ss-switch {
    margin-right: 20px;
    margin-bottom: 10px;
}
</style>
