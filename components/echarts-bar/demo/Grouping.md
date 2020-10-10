---
order: 3
title:
  zh-CN: 分组柱状图
  en-US: 分组柱状图
---

## zh-CN

分组柱状图的展示。

## en-US

分组柱状图的展示。

```jsx
import { BarChart } from 'ss-ui-library';

const data = {
  xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  yData1: [0.1, 0.15, 0.14, 0.2, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45],
  yData2: [0.2, 0.15, 0.12, 0.21, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45],
  yData3: [0.3, 0.15, 0.15, 0.22, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45],
};

const getOption = () => {
  return {
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告'],
    },
    xAxis: {
      data: data.xData,
    },
    series: [
      {
        name: '邮件营销',
        type: 'bar',
        itemStyle: {
          color: 'rgba(35,188,120,0.60)',
        },
        data: data.yData1,
      },
      {
        name: '联盟广告',
        type: 'bar',
        itemStyle: {
          color: 'rgba(0,96,255,0.60)',
        },
        data: data.yData2,
      },
      {
        name: '视频广告',
        type: 'bar',
        itemStyle: {
          color: 'rgba(255,91,0,0.60)',
        },
        data: data.yData3,
      },
    ],
  };
};

ReactDOM.render(
  <div className="example">
    <BarChart option={getOption()} />
  </div>,
  mountNode,
);
```

```css
.example {
  background: #1e1e1e;
}
```
