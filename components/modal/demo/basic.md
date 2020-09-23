---
order: 0
title:
  zh-CN: 基本风格
  en-US: Basic Usage
---

## zh-CN

可以同时展开多个面板，这个例子默认展开了第一个。

## en-US

可以同时展开多个面板，这个例子默认展开了第一个。

```jsx
import { Modal, Button } from 'ss-ui-library';

class Demo extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render () {
    return (
      <div>
          <Button type="primary" yellow onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Modal>
      </div>
    )
  }
}

ReactDOM.render(
  <>
    <Demo/>
  </>
, mountNode);
```
