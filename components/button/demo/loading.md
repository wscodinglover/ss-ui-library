---
order: 5
title:
  zh-CN: loading
  en-US: loading
---

## zh-CN

loading状态

## en-US

loading状态

```jsx
import { Button } from 'ss-ui-library';

class App extends React.Component {
  state = {
    loading: true
  }

  render(){
    return (
      <>
        <Button type="primary" basic loading={this.state.loading}>Test Button</Button>
        <Button type="primary" yellow loading={this.state.loading}>Test Button</Button>
        <Button type="primary" error loading={this.state.loading}>Test Button</Button>
        <Button type="primary" gray loading={this.state.loading}>Test Button</Button>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  mountNode,
);
```
