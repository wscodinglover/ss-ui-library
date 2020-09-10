---
order: 2
title:
  zh-CN: 按钮禁止状态
  en-US: disabled status
---

## zh-CN

按钮禁止状态,对其样式进行了改写

从下列演示，可以看出，disabled的样式只有一种，不允许做出改变`[参考设计图]`

## en-US

按钮禁止状态,对其样式进行了改写

从下列演示，可以看出，disabled的样式只有一种，不允许做出改变`[参考设计图]`

```jsx
import { Button } from 'ss-ui-library';

ReactDOM.render(
  <>
    <Button type="primary" basic disabled>Test Button</Button>
    <Button type="primary" yellow disabled>Test Button</Button>
    <br />
    <Button type="primary" error disabled>Test Button</Button>
    <Button type="primary" gray disabled>Test Button</Button>
  </>,
  mountNode,
);
```
