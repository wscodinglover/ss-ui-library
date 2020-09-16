---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

数字输入框。

## en-US

数字输入框。

```jsx
import { InputNumber  } from 'ss-ui-library';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div className="example">
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
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
