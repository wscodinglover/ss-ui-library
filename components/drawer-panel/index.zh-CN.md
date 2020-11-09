---
category: Components
type: 数据展示
title: DrawerPanel
subtitle: 抽屉式折叠面板
order: 2
---

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义 class | string | - |  |
| defaultopen | 内容区域默认是否打开 | true | - |  |
| placement | 定位方向 | 'topLeft' \| 'top' \| 'topRight' \| 'bottomLeft' \| 'bottom' \| 'bottomRight' \| 'leftTop' \| 'left' \| 'leftBottom' \| 'rightTop' \| 'right' \| 'rightBottom' | bottom |  |
| animated | 是否开启运动模式 | boolean | false |  |
| children | 显示区域的内容 | ReactNode | - |  |
| onBtnClick | 点击目的按钮的回调 | Function: (status: 显示区域显示状态) => {} | - |  |
| onOpen | 显示区域打开时的回调 | Function | - |  |
| onClose | 显示区域关闭时的回调 | Function | - |  |
