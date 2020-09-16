---
order: 2
title:
  zh-CN: 小数
  en-US: 小数
---

## zh-CN

和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

## en-US

和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

```jsx
import { InputNumber  } from 'ss-ui-library';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div className="example">
    <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
  </div>,
  mountNode,
);
```
