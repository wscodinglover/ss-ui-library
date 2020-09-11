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
    },
    {
        key: 'success',
        tab: '成功',
    },
    {
        key: 'pending',
        tab: '运行中',
    },
    {
        key: 'failed',
        tab: '失败',
    }
]

ReactDOM.render(
  <>
    <Tabs dataSource={data} animated={false} />
  </>
, mountNode);
```
