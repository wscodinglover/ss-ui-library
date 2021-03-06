---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

简单的表格，最后一列是各种操作。。

## en-US

Simple table with actions.

```jsx
import { Table } from 'ss-ui-library';
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: () => (
            <div>456</div>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
            return (
                <div>123</div>
            )
        }
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
ReactDOM.render(
    <>
      <Table columns={columns} dataSource={data} />
    </>
, mountNode);
```
