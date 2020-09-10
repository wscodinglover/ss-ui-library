---
order: 0
title:
  zh-CN: 基本风格
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest use

```jsx
import { Tabs } from 'ss-ui-library';
let data = [
    {
        key: 'All',
        tab: '全部',
        render: '全部内容'
    },
    {
        key: 'success',
        tab: '成功',
        render: '成功内容'
    },
    {
        key: 'pending',
        tab: '运行中',
        render: '运行中内容'
    },
    {
        key: 'failed',
        tab: '失败',
        render: '失败内容',
    }
]

ReactDOM.render(
  <>
    <Tabs dataSource={data} animated={false} />
  </>
, mountNode);
```
