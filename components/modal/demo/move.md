---
order: 1
title:
  zh-CN: 可拖拽
  en-US: Basic Usage
---

## zh-CN

可以对 modal 进行拖拽，设置`isMove`为`true`即可。

备注：若使用`maskNotUse`属性进行穿透使用，在 modal 显示状态下，再次点击弹出 Modal，当前的 Modal 会返回原点

## en-US

可以对 modal 进行拖拽，设置`isMove`为`true`即可。

备注：若使用`maskNotUse`属性进行穿透使用，在 modal 显示状态下，再次点击弹出 Modal，当前的 Modal 会返回原点

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
        <Button type="primary" basic onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          isMove
          moveKey="modal1"
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
