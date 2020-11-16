---
order: 3
title:
  zh-CN: 自定义页脚
  en-US: 自定义页脚
---

## zh-CN

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

## en-US

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

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

  private footerRender () {
    return (
      <div className="custom-footer">
        <Button type="primary" error>删除</Button>
        <div>
          <Button type="primary" gray>取消</Button>
          <Button type="primary" basic>保存</Button>
          <Button type="primary" basic>确定</Button>
        </div>
      </div>
    )
  }

  public render () {
    return (
      <div>
          <Button type="primary" yellow onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onCancel={this.handleCancel}
              footer={this.footerRender()}
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

```css
.custom-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```
