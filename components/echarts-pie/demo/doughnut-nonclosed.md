---
order: 2
title:
  zh-CN: 非闭合环形图
  en-US: 非闭合环形图
---

## zh-CN

- Tip: 因与环形图相似，所以在放此处展示，但是此类型图表是基于 `Bar` 类型绘制而成。
- Tip: 非闭合环形图使用的是 `Bar` 的极坐标绘制而成，所以需要 `options` 特别注明 `isPolarCircleChart` 为 `true`。

## en-US

环形图，即调整 series.radius 的可视内半径。

```jsx
import { BarChart } from 'ss-ui-library';

const data = {
  legendData: ['机械电子制造业', '轻纺工业', '资源加工工业', '其他'],
  seriesData: [
    { value: 120, name: '机械电子制造业', itemStyle: { color: '#7822B0' } },
    { value: 110, name: '轻纺工业', itemStyle: { color: '#0060FF' } },
    { value: 234, name: '资源加工工业', itemStyle: { color: '#00A74F' } },
    { value: 335, name: '其他', itemStyle: { color: '#23BC78' } },
  ].sort(function(a, b) {
    return a.value > b.value;
  }),
};

const getOption = () => {
  return {
    legend: {
      data: data.legendData,
    },
    radiusAxis: {
      data: data.legendData,
    },
    series: [
      {
        data: data.seriesData,
      },
      {
        type: 'custom',
        z: 100,
        coordinateSystem: 'polar',
        renderItem: function(params, api) {
          var values = [api.value(0), api.value(1)];
          var coord = api.coord(values);
          return {
            type: 'text',
            position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
            rotation: coord[3] + Math.PI / 2,
            origin: [coord[0], coord[1]],
            style: {
              text: api.value(1),
              fill: '#FFEBC8',
              fontSize: 10,
              textVerticalAlign: 'middle',
              x: coord[0] + 5,
              y: coord[1],
            },
          };
        },
        data: data.seriesData,
      },
    ],
  };
};

ReactDOM.render(
  <div className="example">
    <BarChart isPolarCircleChart option={getOption()} />
  </div>,
  mountNode,
);
```

```css
.example {
  background: #1e1e1e;
}
```
