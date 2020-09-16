---
order: 3
title:
  zh-CN: Radio.Group 垂直
  en-US: Radio.Group 垂直
---

## zh-CN

垂直的 Radio.Group，配合更多输入框选项。

## en-US

垂直的 Radio.Group，配合更多输入框选项。

```jsx
import { Radio } from 'ss-ui-library';

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="example">
          <Radio.Group onChange={this.onChange} value={this.state.value} vertical>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
