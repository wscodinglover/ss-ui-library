---
order: 3
title:
  zh-CN: 不可选择日期和时间
  en-US: 不可选择日期和时间
---

## zh-CN

可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 `disabledTime` 需要和 `showTime` 一起使用。

## en-US

可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 `disabledTime` 需要和 `showTime` 一起使用。

```jsx
import moment from 'moment';
import { DatePicker } from 'ss-ui-library';

function onChange(date, dateString) {
  console.log(date, dateString);
}
function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

ReactDOM.render(
  <div className="example">
    <DatePicker onChange={onChange} disabledDate={disabledDate} />
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
