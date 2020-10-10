---
order: 0
title:
  zh-CN: 圆形雷达图
  en-US: 圆形雷达图
---

## zh-CN

圆形雷达图,即设置 radar.shape = `'circle'`。

'polygon': 默认， 多边形

'circle': 默认， 圆形

## en-US

圆形雷达图,即设置 radar.shape = `'circle'`。

'polygon': 默认， 多边形

'circle': 默认， 圆形

```jsx
import { RadarChart } from 'ss-ui-library';

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
      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
    },
    radar: {
      shape: 'circle',
      indicator: [
        { name: '销售（sales）', max: 6500 },
        { name: '管理（Administration）', max: 16000 },
        { name: '信息技术（Information Techology）', max: 30000 },
        { name: '客服（Customer Support）', max: 38000 },
        { name: '研发（Development）', max: 52000 },
        { name: '市场（Marketing）', max: 25000 },
      ],
    },
    series: [
      {
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）',
            zlevel: 0,
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）',
            zlevel: 1,
            itemStyle: {
              color: '#0060FF',
              borderWidth: 2,
              borderColor: '#121A19',
            },
            lineStyle: {
              color: '#0060FF',
            },
            areaStyle: {
              color: 'rgba(0, 96, 255, .3)',
            },
            emphasis: {
              itemStyle: {
                color: '#0060FF',
                borderWidth: 0,
              },
            },
          },
        ],
      },
    ],
  };
};

ReactDOM.render(
  <div className="example">
    <RadarChart option={getOption()} />
  </div>,
  mountNode,
);
```

```css
.example {
  background: #1e1e1e;
}
```
