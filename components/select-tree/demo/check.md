---
order: 3
title:
  zh-CN: 可勾选
  en-US: 可勾选
---

## zh-CN

使用勾选框实现多选功能。

## en-US

使用勾选框实现多选功能。

```jsx
import { TreeSelect } from 'ss-ui-library';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
    ],
  },
];

class Demo extends React.Component {
  state = {
    value: ['0-0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: '100%',
      },
    };
    return <TreeSelect {...tProps} />;
  }
}

ReactDOM.render(<div className="example"><Demo /></div>, mountNode);
```
```css
.example {
    padding: 20px;
    background: #1e1e1e;
}
```
