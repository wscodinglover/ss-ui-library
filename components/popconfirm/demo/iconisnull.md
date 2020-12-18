---
order: 1
title:
  zh-CN: 无icon
  en-US: 无icon
---

## zh-CN

无 icon 的用法, icon 为 null 即可。

## en-US

无 icon 的用法, icon 为 null 即可。

```jsx
import { Popconfirm, Button } from 'ss-ui-library';

ReactDOM.render(
  <>
    <Popconfirm
      icon={null}
      placement="topLeft"
      title="语雀诞生伊始，只是希望能给工程师提供一个好用的工具用来写技术文档"
    >
      <Button type="primary" basic>
        test Btn
      </Button>
    </Popconfirm>
  </>,
  mountNode,
);
```
