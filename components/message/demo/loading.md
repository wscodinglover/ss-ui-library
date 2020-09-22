---
order: 2
title:
  zh-CN: 加载中
  en-US: 加载中
---

## zh-CN

进行全局 loading，异步自行移除。

## en-US

进行全局 loading，异步自行移除。

```jsx
import { message, Button, Icon } from 'ss-ui-library';

const info = () => {
  const config = {
    content: 'This is test text',
    duration: 0,
  }
  message.loading(config);
};

ReactDOM.render(
  <Button type="primary" yellow onClick={info}>
    loading
  </Button>,
  mountNode,
);
```
