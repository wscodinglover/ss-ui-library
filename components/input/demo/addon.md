---
order: 2
title:
  zh-CN: 前置/后置标签
  en-US: 前置/后置标签
---

## zh-CN

用于配置一些固定组合。

## en-US

用于配置一些固定组合。

```jsx
import { Input, Icon } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <Input placeholder="请输入姓名" allowClear addonBefore="Http://" addonAfter=".com" />
    <Input placeholder="请输入姓名" allowClear addonAfter={<Icon value="&#xe797;" />} />
  </div>,
  mountNode,
);
```
