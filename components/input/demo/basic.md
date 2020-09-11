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

const {TextArea} = Input;

ReactDOM.render(
  <div className="example">
    <Input placeholder="请输入姓名" />
    <TextArea defaultValue="1231232" rows={4} />
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

