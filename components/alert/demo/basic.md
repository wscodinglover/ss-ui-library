---
order: 0
title:
  zh-CN: 基本结构
  en-US: Basic Structure
---

## zh-CN

典型的页面布局。

## en-US

Classic page layouts.

```jsx
import { Alert, Icon } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Alert message="Success Text" />
    <br/>
    <Alert message="Success Text" showIcon />
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
