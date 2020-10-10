---
order: 2
title:
  zh-CN: 堆叠柱状图
  en-US: 堆叠柱状图
---

## zh-CN

堆叠柱状图的展示。

## en-US

堆叠柱状图的展示。

```jsx
import { BarChart } from 'ss-ui-library';

const data = {
  xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  yData: [0.1, 0.15, 0.18, 0.25, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45],
};

const getOption = () => {
  return {
    legend: {
      data: ['邮件营销', '联盟广告'],
    },
    xAxis: {
      data: data.xData,
    },
    series: [
      {
        name: '邮件营销',
        type: 'bar',
        stack: '广告',
        itemStyle: {
          color: 'rgba(35,188,120,0.60)',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        itemStyle: {
          color: 'rgba(0,96,255,0.60)',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
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
