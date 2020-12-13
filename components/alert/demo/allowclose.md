---
order: 1
title:
  zh-CN: 可关闭的警告提示
  en-US: 可关闭的警告提示
---

## zh-CN

显示关闭按钮，点击可关闭警告提示。

## en-US

显示关闭按钮，点击可关闭警告提示。

```jsx
import { Alert } from 'ss-ui-library';

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
      onClose={onClose}
    />
  </div>,
  mountNode,
);
```
