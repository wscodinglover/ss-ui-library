---
order: 0
title:
  zh-CN: SS风格Tabs
  en-US: SS style
---

## zh-CN

SS风格Tabs,主要改动了调色样式

## en-US

SS风格Tabs,主要改动了调色样式, 可以考虑开发其他风格

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
    },
    {
         key: 'failed',
         tab: '失败',
         render: '失败内容',
    }
 ];

ReactDOM.render(
  <div className="example">
    <Tabs dataSource={data} theme="ss"/>
  </div>
, mountNode);
```
```css
.example{
    width: 100%;
    background: #1e1e1e;
    padding: 20px;
}
```
