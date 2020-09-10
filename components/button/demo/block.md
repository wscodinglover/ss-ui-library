---
order: 3
title:
  zh-CN: block 按钮
  en-US: Block Button
---

## zh-CN

`block` 属性将使按钮适合其父宽度。

## en-US

`block` 属性将使按钮适合其父宽度。

```jsx
import { Button } from 'ss-ui-library';

ReactDOM.render(
  <>
    <Button type="primary" basic block>Test Button</Button>
    <Button type="primary" yellow block>Test Button</Button>
    <Button type="primary" error block>Test Button</Button>
    <Button type="primary" gray block>Test Button</Button>
  </>,
  mountNode,
);
```
