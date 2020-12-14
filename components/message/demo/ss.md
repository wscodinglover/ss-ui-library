---
order: 1
title:
  zh-CN: ss icon
  en-US: ss icon
---

## zh-CN

更换需求所需 icon

## en-US

更换需求所需 icon

```jsx
import { message, Button, Icon } from 'ss-ui-library';

const info = () => {
  const config = {
    content: 'This is test text',
    duration: 0,
    icon: <Icon value="&#xe841;" fontSize={14} />,
  };
  message.info(config);
};

ReactDOM.render(
  <Button type="primary" basic onClick={info}>
    test message
  </Button>,
  mountNode,
);
```
