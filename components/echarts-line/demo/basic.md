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
};

const getOption = () => {
  return {
    xAxis: {
      type: 'category',
      data: data.xData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.yData,
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
