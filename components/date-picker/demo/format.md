---
order: 1
title:
  zh-CN: 日期格式
  en-US: 日期格式
---

## zh-CN

使用 format 属性，可以自定义日期显示格式。

## en-US

使用 format 属性，可以自定义日期显示格式。

```jsx
import { DatePicker } from 'ss-ui-library';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const dateFormat = 'DD/MM/YYYY';
const weekDateFormat = 'wo/YYYY';
const monthDateFormat = 'MM/YYYY';

ReactDOM.render(
  <div className="example">
    <DatePicker onChange={onChange} format={dateFormat} />
    <DatePicker onChange={onChange} picker="month" format={monthDateFormat} />
    <DatePicker onChange={onChange} picker="week" format={weekDateFormat} />
  </div>,
  mountNode,
);
```
