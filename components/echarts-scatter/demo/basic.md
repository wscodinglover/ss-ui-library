---
order: 0
title:
  zh-CN: 基本风格
  en-US: Basic Usage
---

## zh-CN

简单的展示。

## en-US

简单的展示。

```jsx
import { ScatterChart } from 'ss-ui-library';

const data = {
  data1: [
    [1.0, 2],
    [1.2, 1.5],
    [2.0, 3],
    [2.1, 1],
    [2.6, 2.3],
    [3.0, 1],
    [3.4, 1.67],
    [4.0, 4],
    [4.2, 2.55],
    [4.7, 3.55],
    [5.0, 2],
    [5.5, 2.3],
    [6.0, 7],
  ],
  data2: [
    [1.3, 1.3],
    [1.4, 1.2],
    [2.1, 2.34],
    [2.43, 1.454],
    [2.7, 1.12],
    [3.7, 1.554],
    [3.3, 1.33],
    [4.4, 2.345],
    [4.6, 2.23],
    [4.7, 3.11],
    [5.8, 1.354],
    [5.34, 1.3],
    [6.2, 5.123],
  ],
};

const getOption = () => {
  return {
    legend: {
      data: ['数据1', '数据2'],
    },
    series: [
      {
        name: '数据1',
        data: data.data1,
      },
      {
        name: '数据2',
        itemStyle: {
          color: 'rgba(255,91,0,0.85)',
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255,91,0,0.85)',
          },
        },
        data: data.data2,
      },
    ],
  };
};

ReactDOM.render(
  <div className="example">
    <ScatterChart option={getOption()} />
  </div>,
  mountNode,
);
```

```css
.example {
  background: #1e1e1e;
}
```
