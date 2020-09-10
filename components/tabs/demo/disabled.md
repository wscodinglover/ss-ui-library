---
order: 3
title:
  zh-CN: 禁用状态
  en-US: disabled
---

## zh-CN

禁用某一项,在dataSource配置中设置disabled为true

## en-US

禁用某一项,在dataSource配置中设置disabled为true

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
        render: '运行中内容',
        disabled: true
    },
    {
         key: 'failed',
         tab: '失败',
         render: '失败内容',
         disabled: true
    }
 ];

ReactDOM.render(
  <div className="example">
    <Tabs dataSource={data} theme="ss"/>
  </div>
, mountNode);
```
