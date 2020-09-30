---
category: Components
subtitle: 柱状图
type: Echarts图表
title: Bar
cols: 1
---

基于 Echarts 柱状图图表展示。

## 何时使用

- 柱状图（或称条形图）。
- 是一种通过柱形的高度（横向的情况下则是宽度）来表现数据大小的一种常用图表类型。

## 特别提示

defaultOption：

```
- 为了图表的UI设计外观的统一，组件给出一份默认的defaultOption配置(如下)
- 在实际的项目中，请在默认的defaultOption配置中进行添加和删除配置选项。
```

[默认的 defaultOption 配置](https://github.com/DavisBryant/ss-ui-library/tree/master/components/echarts-bar/demo/config.ts)

onEvents：

```
let onEvents = {
  'click': this.onChartClick,
  'legendselectchanged': this.onChartLegendselectchanged
}
...
<Chart
  option={option}
  style={{height: '300px', width: '100%'}}
  onEvents={onEvents} />
```

opts：

```
<Charts
  option={option}
  style={{height: '300px'}}
  opts={{renderer: 'svg'}} // use svg to render the chart.
/>

```

## API

### components props

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| --- | --- | --- | --- | --- |
| option | echarts[选项配置](https://echarts.apache.org/option.html#title) | object | ！！使用[defaultOption](#特别提示)进行添加 | true |
| notMerge | 何时 setOption（不合并数据）,[参考](https://echarts.apache.org/api.html#echartsInstance.setOption) | boolean | false |  |
| lazyUpdate | setOption 时，懒加载更新数据,[参考](https://echarts.apache.org/api.html#echartsInstance.setOption) | boolean | false |  |
| style | 外观样式 | object | 默认值为{height：'300px'} |  |
| className | class 名称,可以按类名称设置图表的 CSS 样式 | string | 默认值为{height：'300px'} |  |
| onChartReady | 当图表准备就绪时的回调函数 | Function | (object) => {}: void |  |
| showLoading | 绘制图表时，是否显示 loading 加载蒙版 | boolean | false |  |
| loadingOption | echarts loading 加载选项配置,[参考](https://echarts.apache.org/api.html#echartsInstance.showLoading) | object | false |  |
| onEvents | 绑定 echarts 事件进行回调，[例子](#特别提示)，[参考](https://echarts.apache.org/api.html#events) | - | array(string=>function) |  |
| opts | echarts.init 进行 render 生成 dom 的配置，[例子](#特别提示)，[参考](https://echarts.apache.org/zh/api.html#echarts.init) | - | array(string=>function) |  |

### components API

- getEchartsInstance()

获取 echarts 实例对象，就可以操作整个 echarts 的 API

for example：

```
// render the echarts component below with rel
<Chart ref={(e) => { this.echarts_react = e; }}
  option={option)} />

// then get the `ReactEcharts` use this.echarts_react

let echarts_instance = this.echarts_react.getEchartsInstance();
// then you can use any API of echarts.
let base64 = echarts_instance.getDataURL();
```

关于 echarts 的 API，可以参见 http://echarts.baidu.com/api.html#echartsInstance。

您可以使用 API 执行以下操作：

1.binding / unbinding 事件。

2.dynamic charts 动态数据。

3.获取 echarts dom / dataURL / base64，将图表保存为 png。

4.release 图表。
