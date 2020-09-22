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

function onchange (value) {
  console.log(value);
}

ReactDOM.render(
  <div className="example">
    <Input placeholder="请输入姓名" allowClear onChange={onchange} />
  </div>
, mountNode);
```
```css
.example{
    padding: 20px;
    background: #1e1e1e;
}
```
<style>
.ss-input {
   margin-bottom: 20px;
}
</style>

