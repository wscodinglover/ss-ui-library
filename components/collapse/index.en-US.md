---
category: Components
type: Data Display
title: Spin
subtitle: Spin
---

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## API

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| className        | spin外包装器添加class                         | string     | -         |
| lineStroke       | loading图标svg的线条渲染颜色                   | string     | #136C5E         |
| outward          | loading图标svg外观大小，即宽高度`宽 = 高`        | number     | 16
| text             | 文本内容                                      | string     | -      |
| children         | 文本内容自定义                                 | ReactNode  | -         |
