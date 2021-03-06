---
category: Components
subtitle: 气泡确认框
type: 反馈
title: Popconfirm
order: 5
---

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## API

根据 UI 设计图，不需要取消按钮，若业务需要，后期可考虑开放.

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `[新增]`width | 确认框外层宽度 | number\|string | 300 or 300px |  |
| `[废弃]`cancelText | 取消按钮文字 | string | 取消 |  |
| okText | 确认按钮文字 | string | 确定 |  |
| `[废弃]`okType | 确认按钮类型 | string | primary |  |
| title | 确认框的描述 | string\|ReactNode | 无 |  |
| `[废弃]`onCancel | 点击取消的回调 | function(e) | 无 |  |
| onConfirm | 点击确认的回调 | function(e) | 无 |  |
| icon | 自定义弹出气泡 Icon 图标 | ReactNode | -- | 3.8.0 |
| disabled | 点击 Popconfirm 子元素是否弹出气泡确认框 | boolean | false | 3.19.8 |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popconfirm` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
