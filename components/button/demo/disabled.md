---
order: 2
title:
  zh-CN: 按钮禁止状态
  en-US: disabled status
---

## zh-CN

按钮禁止状态,对其样式进行了改写

从下列演示，可以看出，disabled 的样式只有一种，不允许做出改变`[参考设计图]`

## en-US

按钮禁止状态,对其样式进行了改写

从下列演示，可以看出，disabled 的样式只有一种，不允许做出改变`[参考设计图]`

```jsx
import { Button, Switch } from 'ss-ui-library';

class App extends React.PureComponent {
  state = {
    disabled: true,
  };

  onChange = checked => {
    this.setState({ disabled: checked });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <h4>
          <span>按钮disabled：</span>
          <Switch defaultChecked onChange={this.onChange} />
        </h4>
        <Button type="primary" basic disabled={disabled}>
          Test Button
        </Button>
        <Button type="primary" yellow disabled={disabled}>
          Test Button
        </Button>
        <Button type="primary" error disabled={disabled}>
          Test Button
        </Button>
        <Button type="primary" gray disabled={disabled}>
          Test Button
        </Button>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
