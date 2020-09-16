---
order: 1
title:
  zh-CN: 禁止状态
  en-US: 禁止状态
---

## zh-CN

checkbox 不可用。

## en-US

checkbox 不可用。

```jsx
import { CheckBox } from 'ss-ui-library';

ReactDOM.render(
    <div className="example">
      <CheckBox defaultChecked={false} disabled>Checkbox</CheckBox>
      <CheckBox defaultChecked disabled>Checkbox</CheckBox>
    </div>
, mountNode);
```
```css
.example{
    padding: 20px;
    background: #1e1e1e;
}
```
