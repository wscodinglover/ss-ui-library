---
category: Components
type: 数据展示
subtitle: 日历
cols: 1
title: Calendar
order: 3
---

按照日历形式展示数据的容器。

> ```
> 特别注释：
> 因暂时无特殊卡片式样需求，暂时API中`fullscreen`为true，不可更改!
> ```

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## API

**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

```jsx
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `[新增]`isLunar | 是否显示中国农历 | boolean | false |  |
| `[新增]`lunarFormat | 中国农历显示格式 | string | 'DD' |  |
| `[新增]`hideHeader | 是否隐藏头部 | boolean | false |  |
| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | 无 |  |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | 无 |  |
| defaultValue | 默认展示的日期 | [moment](http://momentjs.com/) | 默认日期 |  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |  |
| `[废弃]`fullscreen | 是否全屏显示 | boolean | true |  |
| locale | 国际化配置 | object | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | 初始模式，`month/year` | string | month |  |
| monthCellRender | 自定义渲染月单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | 无 |  |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | 无 |  |
| validRange | 设置可以显示的日期 | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | 无 | 3.3.0 |
| value | 展示日期 | [moment](http://momentjs.com/) | 当前日期 |  |
| onPanelChange | 日期面板变化回调 | function(date: moment, mode: string) | 无 |  |
| onSelect | 点击选择日期回调 | function(date: moment） | 无 |  |
| onChange | 日期变化回调 | function(date: moment） | 无 | 3.8.0 |
| headerRender | 自定义头部内容 | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | 无 | 3.19.0 |
