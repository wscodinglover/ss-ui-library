---
order: 5
title:
  zh-CN: 搜索框
  en-US: 搜索框
---

## zh-CN

带有搜索按钮的输入框,当原本 Search 不适用场景时，可以使用 Input 进行模拟，使用 Input 所有 Props。

## en-US

带有搜索按钮的输入框,当原本 Search 不适用场景时，可以使用 Input 进行模拟，使用 Input 所有 Props。

```jsx
import { Input } from 'ss-ui-library';

const { Search } = Input;

ReactDOM.render(
  <div className="example">
    <Search placeholder="请输入搜索项" />
    <Input prefix="&#xe80b;" placeholder="请输入搜索项" allowClear />
  </div>,
  mountNode,
);
```
