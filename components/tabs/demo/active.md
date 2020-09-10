---
order: 2
title:
  zh-CN: active & defaultActive
  en-US: active & defaultActive
---

## zh-CN

defaultActive: 指的是初始化后默认指向的标签页

active: 指的是当前标签页，更多时候与状态和事件产生联系

## en-US

defaultActive: 指的是初始化后默认指向的标签页

active: 指的是当前标签页，更多时候与状态和事件产生联系

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
class Demo extends React.Component {
  state = {
    activeKey: "failed"
  }
  tabClick(key, e) {
    console.log(key, e)
    this.setState({
      activeKey: key
    })
  }

  render(){
    return (
      <React.Fragment>
        <Tabs dataSource={data} theme="ss" defaultActiveKey="pending"/>
        <br/>
        <Tabs dataSource={data} theme="ss" activeKey={this.state.activeKey} onTabClick={this.tabClick.bind(this)}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <div className="example">
    <Demo />
  </div>
, mountNode);
```
