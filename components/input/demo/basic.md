---
order: 0
title:
  zh-CN: 基本风格
  en-US: Basic Usage
---

## zh-CN

基本风格。

## en-US

基本风格。

```jsx
import { Input } from 'ss-ui-library';
const onchange = (value) => {
  console.log(value);
}
ReactDOM.render(
  <div className="example">
    <Input placeholder="请输入姓名" onChange={onchange} />
  </div>
, mountNode);
```
```css
.example{
    padding: 20px;
    background: #1e1e1e;
}
.example h4{
    color: #fff;
}
```
<style>
.ss-input {
   margin-bottom: 20px;
}
</style>

