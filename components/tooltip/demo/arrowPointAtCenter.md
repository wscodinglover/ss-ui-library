---
order: 2
title:
  zh-CN: 箭头指向
  en-US: 箭头指向
---

## zh-CN

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

## en-US

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```jsx
import { Tooltip, Button } from 'ss-ui-library';

ReactDOM.render(
    <div>
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>Align edge / 边缘对齐</Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Tooltip>
    </div>,
    mountNode,
);
```
