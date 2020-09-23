---
order: 1
title:
  zh-CN: 异步关闭
  en-US: 异步关闭
---

## zh-CN

点击确定后异步关闭对话框，例如提交表单。

## en-US

点击确定后异步关闭对话框，例如提交表单。

```jsx
import { Modal, Button } from 'ss-ui-library';

class Demo extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

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
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  render () {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
          <Button type="primary" yellow onClick={this.showModal}>
            Open Modal with async logic
          </Button>
          <Modal
              title="Basic Modal"
              visible={this.state.visible}
              confirmLoading={confirmLoading}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
              <p>{ModalText}</p>
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
