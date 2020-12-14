---
order: 0
title:
  zh-CN: 自动关闭的延时
  en-US: 自动关闭的延时
---

## zh-CN

自定义通知框自动关闭的延时，默认 4.5s，取消自动关闭只要将该值设为 0 即可。

## en-US

自定义通知框自动关闭的延时，默认 4.5s，取消自动关闭只要将该值设为 0 即可。

```jsx
import { Button, notification } from 'ss-ui-library';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    duration: 0,
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
