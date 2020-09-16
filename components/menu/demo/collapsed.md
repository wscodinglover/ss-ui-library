---
order: 0
title:
  zh-CN: 缩起内嵌菜单
  en-US: 缩起内嵌菜单
---

## zh-CN

内嵌菜单可以被缩起/展开。

## en-US

内嵌菜单可以被缩起/展开。

```jsx
import { Menu, Icon, Button } from 'ss-ui-library';

const muneData = [
    {
        key: 0,
        title: <span><Icon value="&#xe773;" />菜单1</span>,
        show: true,
        disabled: true,
    },
    {
        key: 1,
        title: <span><Icon value="&#xe773;" />菜单2</span>,
        show: true,
        children: [
            {
                key: "sub1",
                title: <span><Icon value="&#xe773;" />菜单2的sun item 1</span>,
                show: true,
                disabled: true
            },
            {
                key: "sub2",
                title: '菜单2的sun item 2',
                show: true,
            },
            {
                key: "sub3",
                title: '菜单2的sun item 3',
                show: true,
                disabled: true,
            },
        ]
    },
    {
        key: 2,
        title: '菜单3',
        show: true,
        children: [
            {
                title: '菜单3的sun item 1',
                show: true,
            },
            {
                title: '菜单3的sun item 2',
                show: true,
            },
            {
                title: '菜单3的sun item 3',
                show: true,
            },
        ]
    },
    {
        key: 3,
        title: '菜单4',
        show: true,
    },
]

class App extends React.Component {
  state={
     collapsed: false
  }

  changeCollapse = ()  => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render(){
    return (
        <div className="example">
          <Button
            type="primary"
            yellow
            style={{marginBottom: "20px"}}
            onClick={this.changeCollapse}>
            收起 | 展开
          </Button>
          <Menu
            dataSource={muneData}
            inlineCollapsed={this.state.collapsed}
            mode="inline"
           />
        </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```
```css
.example{
    width: 256px
}
```
