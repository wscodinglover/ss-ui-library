---
order: 2
title:
  zh-CN: 自定义描述文案
  en-US: Basic Usage
---

## zh-CN

自定义描述文案

## en-US

自定义描述文案

```jsx
import { Spin } from 'ss-ui-library';

const ssLoading = {
  show: true,
  outward: 40,
  text: '加载中',
};

ReactDOM.render(
  <>
    <Spin tip="加载中">
      <div className="example1"></div>
    </Spin>
    <br />
    <Spin ssLoading={ssLoading}>
      <div className="example1"></div>
    </Spin>
  </>,
  mountNode,
);
```

```css
.example1 {
  width: 100%;
  height: 100px;
  background: #1e1e1e;
}
```
