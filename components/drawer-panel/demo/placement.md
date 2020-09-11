---
order: 1
title:
  zh-CN: 方向
  en-US: Placement
---

## zh-CN

方向设定决定点击目标按钮的定位位置

## en-US

方向设定决定点击目标按钮的定位位置

```jsx
import { DrawerPanel } from 'ss-ui-library';

ReactDOM.render(
  <>
    <h4>方向：topLeft</h4>
    <DrawerPanel placement="topLeft"/>
    <h4>方向：top</h4>
    <DrawerPanel placement="top" />
    <h4>方向：topRight</h4>
    <DrawerPanel placement="topRight" />
    <h4>方向：bottomLeft</h4>
    <DrawerPanel placement="bottomLeft" />
    <h4>方向：bottom ···方向默认值为bottom</h4>
    <DrawerPanel placement="bottom" />
    <h4>方向：bottomLeft</h4>
    <DrawerPanel placement="bottomRight" />
  </>
, mountNode);
```
