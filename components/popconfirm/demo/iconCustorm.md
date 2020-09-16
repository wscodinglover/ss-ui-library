---
order: 2
title:
  zh-CN: 自定义icon
  en-US: 自定义icon
---

## zh-CN

自定义icon的用法。

## en-US

自定义icon的用法。

```jsx
import { Popconfirm, Button } from 'ss-ui-library';

ReactDOM.render(
    <>
        <Popconfirm
            icon="&#xe7c3;"
            placement="topLeft"
            cancelText="hahaha"
            title="语雀诞生伊始，只是希望能给工程师提供一个好用的工具用来写技术文档">
          <Button type="primary" yellow>test Btn</Button>
        </Popconfirm>
    </>
, mountNode);
```
