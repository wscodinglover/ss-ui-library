---
order: 1
title:
  zh-CN: 可拖拽
  en-US: Basic Usage
---

## zh-CN

可以对 modal 进行拖拽，设置`isMove`为`true`即可。

## en-US

可以对 modal 进行拖拽，设置`isMove`为`true`即可。

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

  render() {
    return (
      <div>
        <Button type="primary" yellow onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          isMove
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <Demo />
  </>,
  mountNode,
);
```
