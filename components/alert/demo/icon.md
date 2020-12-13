---
order: 2
title:
  zh-CN: 图标
  en-US: 图标
---

## zh-CN

可口的图标让信息类型更加醒目。

## en-US

可口的图标让信息类型更加醒目。

```jsx
import { Alert, Icon } from 'ss-ui-library';

const onClose = e => {
  console.log(e, 'I was closed.');
};

ReactDOM.render(
  <div className="example">
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      closable
      onClose={onClose}
    />
    <br/>
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      closable
      showIcon
      onClose={onClose}
    />
    <br/>
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      closable
      showIcon
      icon="&#xe79f;"
      onClose={onClose}
    />
    <br/>
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      closable
      showIcon
      icon={<Icon value="&#xe79f;" />}
      onClose={onClose}
    />
  </div>,
  mountNode,
);
```
