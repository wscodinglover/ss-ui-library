---
order: 4
title:
  zh-CN: 居中
  en-US: center
---

## zh-CN

标签居中展示

## en-US

标签居中展示

```jsx
import { Tabs } from 'ss-ui-library';
const data = [
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
 ];

ReactDOM.render(
  <div className="example">
    <Tabs dataSource={data} theme="ss" centered/>
  </div>
, mountNode);
```
