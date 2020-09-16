---
order: 3
title:
  zh-CN: 格式化展示
  en-US: 格式化展示
---

## zh-CN

通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

## en-US

通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

```jsx
import { InputNumber  } from 'ss-ui-library';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div className="example">
    <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>,
  mountNode,
);
```
