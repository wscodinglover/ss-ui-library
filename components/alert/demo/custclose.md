---
order: 3
title:
  zh-CN: 自定义关闭
  en-US: 自定义关闭
---

## zh-CN

可以自定义关闭。

## en-US

可以自定义关闭。

```jsx
import { Alert, Button } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      closable
      closeText="close now"
    />
    <br />
    <h4 style={{color: '#fff'}}>备注：不建议此处使用Button，会报错，因为外层包裹的alert-close-icon是button标签，button中是不允许继续包裹button标签的，特此说明</h4>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      closable
      closeText={<Button type="primary" basic>test close</Button>}
    />
  </div>,
  mountNode,
);
```
