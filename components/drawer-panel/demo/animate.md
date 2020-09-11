---
order: 2
title:
  zh-CN: 动画模式
  en-US: 动画模式
---

## zh-CN

是否开启动画模式，目前仅支持`slider`模式

## en-US

是否开启动画模式，目前仅支持`slider`模式

```jsx
import { DrawerPanel } from 'ss-ui-library';

ReactDOM.render(
  <>
    <h4>默认无动画模式</h4>
    <DrawerPanel />
    <h4>开启动画模式</h4>
    <DrawerPanel animated />
  </>
, mountNode);
```
