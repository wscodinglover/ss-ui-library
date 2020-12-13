---
order: 4
title:
  zh-CN: 错误提示
  en-US: 错误提示
---

## zh-CN

type属性废除，但保留error类型作为特殊类型，后续还可以根据需要添加。

## en-US

type属性废除，但保留error类型作为特殊类型，后续还可以根据需要添加。

```jsx
import { Alert } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Alert message="Success Text"  type="error"/>
    <br/>
    <Alert message="Success Text" showIcon type="error" closable />
  </div>,
  mountNode,
);
```
```css
.example {
    padding: 20px;
    background: #1e1e1e;
}
```
