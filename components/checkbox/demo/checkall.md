---
order: 3
title:
  zh-CN: 全选
  en-US: Basic Usage
---

## zh-CN

在实现全选效果时，你可能会用到 `indeterminate` 属性。

## en-US

在实现全选效果时，你可能会用到 `indeterminate` 属性。

```jsx
import { CheckBox } from 'ss-ui-library';

const {Group} = CheckBox;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    return (
      <div className="example">
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <CheckBox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </CheckBox>
        </div>
        <br />
        <Group
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
