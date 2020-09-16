---
order: 1
title:
  zh-CN: 主题
  en-US: 主题
---

## zh-CN

主题暂时先支持 `common` 和 `rainbow` 两种

## en-US

主题暂时先支持 `common` 和 `rainbow` 两种

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
          <Slider defaultValue={30} disabled={this.state.disabled} theme="rainbow" />
          <Slider defaultValue={[20, 50]} range disabled={this.state.disabled} theme="rainbow" />
          <Switch defaultChecked onChange={this.onchange.bind(this)} />
        </>
      )
  }
}

ReactDOM.render(
  <App />
, mountNode);
```
