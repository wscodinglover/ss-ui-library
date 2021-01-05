---
order: 3
title:
  zh-CN: 文本域
  en-US: 文本域
---

## zh-CN

用于多行输入。

## en-US

用于多行输入。

```jsx
import { Input } from 'ss-ui-library';

const { TextArea } = Input;

ReactDOM.render(
  <div className="example">
    <TextArea placeholder="请输入内容" rows={4} />
  </div>,
  mountNode,
);
```
