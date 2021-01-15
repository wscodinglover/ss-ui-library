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
import { IframeModal, Button } from 'ss-ui-library';

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
        <IframeModal
          id="iframe-modal-2"
          visible={this.state.visible}
          mask={false}
          wrapVisible={false}
          title="操作型对话框2"
          footer={
            <>
              <Button gray>取消</Button>
              <Button basic>确定</Button>
            </>
          }
        >
          <div>「语雀」是一个「专业的云端知识库」，孵化自 蚂蚁金服 。</div>
          <div>「语雀」是一个「专业的云端知识库」，孵化自 蚂蚁金服 。</div>
          <div>「语雀」是一个「专业的云端知识库」，孵化自 蚂蚁金服 。</div>
        </IframeModal>
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
