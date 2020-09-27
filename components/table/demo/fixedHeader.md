---
order: 2
title:
  zh-CN: 固定表头
  en-US: fixed Head
---

## zh-CN

方便一页内展示大量数据。

需要指定 column 的 width 属性，否则列头和内容可能不对齐。

## en-US

方便一页内展示大量数据。

需要指定 column 的 width 属性，否则列头和内容可能不对齐。

```jsx
import { Table } from 'ss-ui-library';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 120
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

ReactDOM.render(
    <>
      <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
    </>
, mountNode);
```
