---
order: 0
title:
  zh-CN: 基本
  en-US: Basic Usage
---

## zh-CN

基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。

## en-US

基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。

```jsx
import { Slider, Switch } from 'ss-ui-library';

class App extends React.Component {
  state = {
    disabled: false
  }

  onchange () {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  render(){
      return (
        <>
          <Slider defaultValue={30} disabled={this.state.disabled} />
          <Slider defaultValue={[20, 50]} range disabled={this.state.disabled} />
          <Switch defaultChecked onChange={this.onchange.bind(this)} />
        </>
      )
  }
}

ReactDOM.render(
  <App />
, mountNode);
```
