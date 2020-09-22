---
order: 3
title:
  zh-CN: 自定义关闭
  en-US: 自定义关闭
---

## zh-CN

可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

## en-US

可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

```jsx
import { Alert, Icon, Button } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      closeText={<Button type="primary" basic>close</Button>}
    />
  </div>,
  mountNode,
);
```
