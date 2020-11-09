---
category: Components
type: 数据展示
title: Tabs
subtitle: 标签页
order: 7
---

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `[新增]`dataSource | tabs 配置项数据 | object([参考配置项](#dataSource)) | - |  |
| `[新增]`theme | 自定义模板`目前仅支持ss` | string | 'ss' |  |
| `[新增]`animated | 是否使用动画切换 Tabs，在 `tabPosition=top|bottom` 时有效 | boolean \| {inkBar:boolean, tabPane:boolean} | false, 当 type="card" 时为 false |  |
| `[新增]`centered | 居中显示 | boolean | false |
| activeKey | 当前激活 tab 面板的 key | string | 无 |  |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | 无 | 3.9.0 |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | 第一个面板 |  |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |  |
| size | 大小，提供 `large` `default` 和 `small` 三种大小 | string | 'default' |  |
| tabBarExtraContent | tab bar 上额外的元素 | React.ReactNode | 无 |  |
| tabBarGutter | tabs 之间的间隙 | number | 无 | 3.2.0 |
| tabBarStyle | tab bar 的样式对象 | object | - |  |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | 'top' |  |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string | 'line' |  |
| onChange | 切换面板的回调 | Function(activeKey) {} | 无 |  |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | 无 |  |
| onNextClick | next 按钮被点击的回调 | Function | 无 |  |
| onPrevClick | prev 按钮被点击的回调 | Function | 无 |  |
| onTabClick | tab 被点击的回调 | Function | 无 |  |

### dataSource

| 参数      | 说明                                            | 类型                | 默认值 |
| --------- | ----------------------------------------------- | ------------------- | ------ |
| icon      | 选项卡头 icon 图标                              | ReactNode           | -      |
| key       | 对应 activeKey                                  | string              | -      |
| tab       | 选项卡头显示文字                                | string \| ReactNode | -      |
| disabled  | 选项卡头是否禁用                                | boolean             | -      |
| render    | 选项卡显示区域内容                              | string \| ReactNode | -      |
| closeIcon | 自定义关闭图标，`在 type="editable-card"`时有效 | ReactNode           | -      |
