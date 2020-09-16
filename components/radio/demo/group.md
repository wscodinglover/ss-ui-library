---
order: 2
title:
  zh-CN: Radio组合
  en-US: Radio组合
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

一组互斥的 Radio 配合使用。

```jsx
import { Radio } from 'ss-ui-library';

class App extends React.Component {
  state = {
    value: 1,
    value1: 'Apple',
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  onChange1 = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  };

  render() {
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ];

    return (
      <div className="example">
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
          <Radio.Group options={options} onChange={this.onChange1} value={this.state.value1} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
