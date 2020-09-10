---
order: 4
title:
  zh-CN: 图标按钮
  en-US: Icon Button
---

## zh-CN

当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。

## en-US

当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。

```jsx
import { Button } from 'ss-ui-library';

ReactDOM.render(
  <>
   <Button icon="&#xe80b;" type="primary" basic>Test Button</Button>
   <Button icon="&#xe80b;" type="primary" basic shape="round">Test Button</Button>
   <Button icon="&#xe79f;" type="primary" yellow>Test Button</Button>
   <Button icon="&#xe79f;" type="primary" yellow shape="round">Test Button</Button>
  </>,
  mountNode,
);
```
