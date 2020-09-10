---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

## en-US

最简单的用法，在浮层中可以选择或者输入日期。

```jsx
import { DatePicker } from 'ss-ui-library';

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div className="example">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="week" />
  </div>,
  mountNode,
);
```
```css
.example {
    background: #1e1e1e;
    padding: 20px;
}
```
