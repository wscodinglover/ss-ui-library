---
order: 1
title:
  zh-CN: 面积图
  en-US: 面积图
---

## zh-CN

简单的展示。

## en-US

面积图，即在 `series` 中加入 `areaStyle` 配置项。

多个面积图置于一个图表中，即将 `series` 数组中加入多个配置项。

```jsx
import { LineChart } from 'ss-ui-library';

const data = {
  xData: [
    '花溪区',
    '南明区',
    '观山湖区',
    '钟山区',
    '六枝特区',
    '红花岗区',
    '汇川区',
    '遵义县',
    '西秀区',
    '平坝县',
    '玉屏县',
  ],
  yData: [0.1, 0.15, 0.18, 0.25, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45],
  yData1: [0.05, 0.1, 0.13, 0.2, 0.18, 0.17, 0.18, 0.16, 0.33, 0.47, 0.3],
};

const getOption = () => {
  return {
    legend: {
      icon: 'roundRect',
      data: ['数据1', '数据2'],
    },
    xAxis: {
      type: 'category',
      data: data.xData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '数据1',
        itemStyle: {
          color: 'rgba(35,188,120,0.85)',
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(35,188,120,0.85)',
          },
        },
        areaStyle: {
          color: 'rgba(35,188,120,0.85)',
        },
        data: data.yData,
      },
      {
        name: '数据2',
        itemStyle: {
          color: '#FF5B00',
        },
        emphasis: {
          itemStyle: {
            color: '#FF5B00',
          },
        },
        areaStyle: {
          color: 'rgba(255,91,0,.8)',
        },
        data: data.yData1,
      },
    ],
  };
};

ReactDOM.render(
  <div className="example">
    <LineChart option={getOption()} />
  </div>,
  mountNode,
);
```

```css
.example {
  background: #1e1e1e;
}
```
