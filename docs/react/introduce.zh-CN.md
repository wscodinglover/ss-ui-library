---
order: 0
title: 快速入门
---

`ss-ui-library` 是基于 Ant Design 二次封装的组件库。

---

## 特点

技术栈: React + Typescript + Echarts + bisheng

- 可插拔式组件渲染方式
- 丰富的通用组件,符合现代浏览器的设计需求
- 丰富的图表组件，满足数据可视化展示
- 支持按需加载和手动引入方式
- 栅格化、响应式布局
- 友好的技术文档 API，丰富的 DEMO 展示
- 支持全局化配置，如语言，外观，空状态等
- 内嵌丰富的工具类使用 API，如 Observer、Websocket 等
- 严格的编码技术，严格的类型定义

## 组件

### 通用组件

通用： Button（按钮）、 Icon（图标）

布局： Grid（栅格）、 Layout（布局）

导航： Dropdown（下拉菜单）、 Menu（导航菜单）、 Pagination（分页）

数据录入： Checkbox（多选框）、 DatePicker（日期选择框）、 Form（表单）、 InputNumber（数字输入框）、 Input（输入框）、 Radio（单选框）、 Switch（开关）、 Slider（滑动输入条）、 Select（选择器）、 TreeSelect（树选择）、 Transfer（穿梭框）

数据展示: Collapse（折叠面板）、 DrawerPanel（抽屉式折叠面板）、 Calendar（日历）、 Empty（空状态）、 Tree（树形控件）、 Tooltip（文字提示）、 Tabs（标签页）、 Table（表格）

反馈: Alert（警告提示）、 Modal（对话框）、 Message（全局提示）、 Notification（通知提醒框）、 Popconfirm（气泡确认框）、 Spin（加载中）

其他: ConfigProvider（全局化配置）

### 图表组件

BarChart（柱状图）、 LineChart（折线/面积图）、 ScatterChart（散点/气泡图）、 RadarChart（雷达图）、 PieChart（饼/环形图）、 CandlestickChart（K 线图）

### 工具类公共方法

Observer（发布订阅）、 Websocket（socket 机制）

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install ss-ui-library --save
```

```bash
$ yarn add ss-ui-library
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 示例

```jsx
import { Star } from 'ss-ui-library';
ReactDOM.render(<div><Star/><span>姓名</span><div/>, mountNode);
```

引入样式：

```jsx
import 'ss-ui-library/dist/ss-ui-library.css'; // or 'ss-ui-library/dist/ss-ui-library.less'
```

### 按需加载

> 注意：ss-ui-library 默认支持基于 ES module 的 tree shaking，不使用以下插件也会有按需加载的效果。

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", {
        "libraryName": "ss-ui-library",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }]
    ]
  }
  ```

  然后只需从 ss-ui-library 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { Star } from 'ss-ui-library';
  ```

- 手动引入

  ```jsx
  import Star from 'ss-ui-library/es/star'; // 加载 JS
  import 'ss-ui-library/es/star/style/css'; // 加载 CSS
  // import 'ss-ui-library/es/star/style';         // 加载 LESS
  ```
