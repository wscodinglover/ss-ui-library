---
order: 0
title:
  zh-CN: 普通提示
  en-US: 普通提示
---

## zh-CN

信息提醒反馈。

## en-US

信息提醒反馈。

```jsx
import { message, Button } from 'ss-ui-library';

const info = () => {
  message.info('This is a normal message', 0);
};

ReactDOM.render(
  <Button type="primary" yellow onClick={info}>
    Display normal message
  </Button>,
  mountNode,
);
```
