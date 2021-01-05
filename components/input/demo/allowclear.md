---
order: 4
title:
  zh-CN: 带移除图标
  en-US: 带移除图标
---

## zh-CN

带移除图标的输入框，点击图标删除所有内容。

## en-US

带移除图标的输入框，点击图标删除所有内容。

```jsx
import { Input } from 'ss-ui-library';

const { TextArea } = Input;

function onchange(value) {
  console.log(value);
}

ReactDOM.render(
  <div className="example">
    <Input placeholder="请输入姓名" allowClear onChange={onchange} />
    <TextArea placeholder="请输入姓名" allowClear />
  </div>,
  mountNode,
);
```
