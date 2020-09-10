---
order: 1
title:
  zh-CN: 表头折叠
  en-US: Head Folding
---

## zh-CN

表头折叠功能是自定义操作，columns和dataSource都有严格的结构模型。

## en-US

The header folding function is a custom operation, columns and dataSource have strict structural models.

```jsx
import { Table } from 'ss-ui-library';
const columns = [
    {
        title: '地点',
        dataIndex: 'adress',
        key: 'adress',
        render: (data) => {
            return <span style={{color: 'red'}}>{data}</span>
        }
    },
    {
        title: '地区',
        dataIndex: 'area',
        key: 'area',
        render: (data) => {
            return <span style={{color: 'red'}}>{data}</span>
        }
    },
    {
        title: {
            default: '11月',
            children: ['上旬', '中旬', '下旬']
        },
        dataIndex: ['Early', 'MidTerm', 'Late'],
        key: ['Early', 'MidTerm', 'Late'],
    },
    {
        title: {
            default: '12月',
            children: ['上旬', '中旬', '下旬']
        },
        dataIndex: ['Early', 'MidTerm', 'Late'],
        key: ['Early', 'MidTerm', 'Late'],
    }
];
const data = [
    {
        key: '1',
        area: '北京',
        adress: '长安路',
        Early: 11.2,
        MidTerm: 12.44,
        Late: 8.445,
    },
    {
        key: '2',
        area: '上海',
        adress: '中山南一路',
        Early: 11.2,
        MidTerm: 12.44,
        Late: 8.445,
    },
    {
        key: '3',
        area: '深圳',
        adress: '深港大道',
        Early: 11.2,
        MidTerm: 12.44,
        Late: 8.445,
    },
    {
        key: '4',
        area: '苏州',
        adress: '观前街',
        Early: 11.2,
        MidTerm: 12.44,
        Late: 8.445,
    }
];


ReactDOM.render(
    <>
      <Table columns={columns} dataSource={data} />
    </>
, mountNode);
```
