---
order: 1
title:
  zh-CN: 农历显示
  en-US: 农历显示
---

## zh-CN

日期农历显示。

配合 `lunarFormat` 使用，格式逻辑为string.replace(formatter)

## en-US

日期农历显示。

配合 `lunarFormat` 使用，格式逻辑为string.replace(formatter)

```jsx
import { Calendar } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Calendar isLunar lunarFormat="MM - DD" />
  </div>,
 mountNode);
```
