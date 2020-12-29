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
const { MonthPicker, WeekPicker } = DatePicker;

import moment from 'moment';

ReactDOM.render(
  <div className="example">
    <DatePicker disabled />
    <DatePicker disabled picker="month" />
    <DatePicker disabled picker="week" />
    <DatePicker disabled picker="range" />
  </div>,
  mountNode,
);
```
