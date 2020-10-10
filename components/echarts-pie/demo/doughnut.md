---
order: 1
title:
  zh-CN: 环形图
  en-US: 环形图
---

## zh-CN

环形图，即调整 series.radius 的可视内半径。

## en-US

环形图，即调整 series.radius 的可视内半径。

```jsx
import { PieChart } from 'ss-ui-library';

const data = {
  legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
  seriesData: [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' },
  ],
};

const getOption = () => {
  return {
    legend: {
      data: data.legendData,
    },
    series: [
      {
        radius: ['60%', '80%'],
        data: data.seriesData,
      },
    ],
  };
};

ReactDOM.render(
  <div className="example">
    <PieChart option={getOption()} />
  </div>,
  mountNode,
);
```

```css
.example {
  background: #1e1e1e;
}
```
