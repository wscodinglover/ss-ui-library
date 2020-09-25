---
order: 3
title:
  zh-CN: 尺寸大小
  en-US: 尺寸大小
---

## zh-CN

尺寸大小，设置 `size` 属性即可。

## en-US

尺寸大小，设置 `size` 属性即可。

```jsx
import { Switch } from 'ss-ui-library';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

ReactDOM.render(
  <div className="example">
    <Switch defaultChecked onChange={onChange} />
    <br />
    <Switch size="small" defaultChecked onChange={onChange} />
  </div>,
  mountNode,
);
```
