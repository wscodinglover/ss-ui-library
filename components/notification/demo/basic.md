---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，4.5 秒后自动关闭。

## en-US

最简单的用法，4.5 秒后自动关闭。

```jsx
import { Button, notification } from 'ss-ui-library';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <>
    <Button type="primary" basic onClick={openNotification}>
      Open the notification box
    </Button>
  </>,
  mountNode,
);
```
