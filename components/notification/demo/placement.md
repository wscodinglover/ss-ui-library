---
order: 0
title:
  zh-CN: 位置
  en-US: 位置
---

## zh-CN

通知从右上角、右下角、左下角、左上角弹出。

## en-US

通知从右上角、右下角、左下角、左上角弹出。

```jsx
import { Button, notification } from 'ss-ui-library';

const openNotification = placement => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

ReactDOM.render(
  <>
    <Button type="primary" basic onClick={() => openNotification('topLeft')}>
      topLeft
    </Button>
    <Button type="primary" basic onClick={() => openNotification('topRight')}>
      topRight
    </Button>
    <Button type="primary" basic onClick={() => openNotification('bottomLeft')}>
      bottomLeft
    </Button>
    <Button type="primary" basic onClick={() => openNotification('bottomRight')}>
      bottomRight
    </Button>
  </>,
  mountNode,
);
```
