---
order: 3
title:
  zh-CN: 分组
  en-US: 分组
---

## zh-CN

用 OptGroup 进行选项分组。

## en-US

用 OptGroup 进行选项分组。

```jsx
import { Select } from 'ss-ui-library';

const { Option, OptGroup  } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <div className="example">
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <OptGroup label="Manager">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </OptGroup>
      <OptGroup label="Engineer">
        <Option value="Yiminghe">yiminghe</Option>
      </OptGroup>
    </Select>
  </div>,
  mountNode,
);
```
