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
    <Button type="primary" basic block>
      测试按钮
    </Button>
    <Button type="primary" yellow block>
      测试按钮
    </Button>
    <Button type="primary" error block>
      测试按钮
    </Button>
    <Button type="primary" gray block>
      测试按钮
    </Button>
  </>,
  mountNode,
);
```
