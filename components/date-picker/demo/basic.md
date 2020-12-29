---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

两种使用方法，除了原本 antd 提供的方法，还封装了 `picker` 类型直接定义。

## en-US

最简单的用法，在浮层中可以选择或者输入日期。

两种使用方法，除了原本 antd 提供的方法，还封装了 `picker` 类型直接定义。

```jsx
import { DatePicker } from 'ss-ui-library';
const { MonthPicker, WeekPicker, RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div className="example">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="month" />
    <MonthPicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <WeekPicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="range" />
    <RangePicker onChange={onChange} />
  </div>,
  mountNode,
);
```
