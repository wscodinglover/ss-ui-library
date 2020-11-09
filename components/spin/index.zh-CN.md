---
category: Components
type: 反馈
title: Spin
subtitle: 加载中
order: 6
---

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| indicator | 加载指示符 | ReactNode | - |
| `[废弃]`size | `[暂无尺寸规则]`组件大小，可选值为 `small` `default` `large` | string | `default` |
| spinning | 是否为加载中状态 | boolean | true |
| tip | 当作为包裹元素时，可以自定义描述文案 | string | - |
| wrapperClassName | 包装器的类属性 | string | - |

## ssLoading

| 参数                 | 说明                                         | 类型       | 默认值  |
| -------------------- | -------------------------------------------- | ---------- | ------- |
| className            | spin 外包装器添加 class                      | string     | -       |
| lineStroke           | loading 图标 svg 的线条渲染颜色              | Hex \| rgb | #136C5E |
| outward              | loading 图标 svg 外观大小，即宽高度`宽 = 高` | number     | 16      |
| text                 | 文本内容                                     | string     | -       |
| `[废弃暂时]`children | 文本内容自定义                               | ReactNode  | -       |
