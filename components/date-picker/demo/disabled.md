---
order: 2
title:
  zh-CN: 禁用
  en-US: 禁用
---

## zh-CN

选择框的不可用状态。

## en-US

选择框的不可用状态。

```jsx
import { DatePicker } from 'ss-ui-library';
import moment from 'moment';

ReactDOM.render(
  <div className="example">
    <DatePicker disabled />
    <br/>
    <br/>
    <DatePicker picker="month" defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} disabled />
    <br/>
    <br/>
    <DatePicker picker="week" disabled />
    <br/>
    <br/>
    <DatePicker picker="range" disabled />
  </div>,
  mountNode,
);
```
