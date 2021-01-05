---
order: 1
title:
  zh-CN: 禁用
  en-US: Disabled
---

## zh-CN

禁用状态。

## en-US

禁用状态。

```jsx
import { Input } from 'ss-ui-library';

const { Search, TextArea } = Input;

ReactDOM.render(
  <div className="example">
    <Input placeholder="请输入姓名" disabled />
    {/*<Search placeholder="请输入搜索项" disabled />*/}
    <TextArea placeholder="请输入内容" disabled />
  </div>,
  mountNode,
);
```
