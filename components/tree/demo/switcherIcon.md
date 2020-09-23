---
order: 4
title:
  zh-CN: 自定义展开/折叠图标
  en-US: 自定义展开/折叠图标
---

## zh-CN

自定义展开/折叠图标。

## en-US

自定义展开/折叠图标。

```jsx
import { Tree, Icon } from 'ss-ui-library';

const { TreeNode } = Tree;

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onExpand = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
    };

  render() {
    return (
      <Tree
        basicSwitcherIcon={{
          open: <Icon value="&#xe7f2;" />,
          close: <Icon value="&#xe7de;" />
        }}
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}
        onExpand={this.onExpand}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}


ReactDOM.render(<div className="example"><Demo /></div>, mountNode);
```
