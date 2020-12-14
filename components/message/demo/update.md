---
order: 4
title:
  zh-CN: 更新消息内容
  en-US: 更新消息内容
---

## zh-CN

可以通过唯一的 `key` 来更新内容。

## en-US

可以通过唯一的 `key` 来更新内容。

```jsx
import { message, Button } from 'ss-ui-library';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

ReactDOM.render(
  <Button type="primary" basic onClick={openMessage}>
    Open the message box
  </Button>,
  mountNode,
);
```
