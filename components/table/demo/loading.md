---
order: 5
title:
  zh-CN: loading状态
  en-US: loading
---

## zh-CN

loading状态显示，loading可自定义

更多配置项，请查看 [[Spin]](/components/spin/)。

## en-US

loading状态显示，loading可自定义

更多配置项，请查看 [[Spin]](/components/spin/)。

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
