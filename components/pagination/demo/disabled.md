---
order: 2
title:
  zh-CN: 禁止状态
  en-US: 禁止状态
---

## zh-CN

分页不可用。

## en-US

分页不可用。

```jsx
import { Pagination } from 'ss-ui-library';

ReactDOM.render(
    <div className="example">
      <Pagination defaultCurrent={1} total={50} disabled />
      <br/>
      <Pagination defaultCurrent={6} total={500} disabled />
    </div>
, mountNode);
```
