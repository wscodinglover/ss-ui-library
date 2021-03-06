---
category: Components
subtitle: 空状态
type: 数据展示
title: Empty
cols: 1
order: 4
---

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义 class 名称 | string | - |  |
| icon | 自定义图标 | string | - |  |
| iconSize | 自定义图标大小 | number \| string | 12 |  |
| vertical | 当多层 dom，如添加 icon 显示，是否垂直显示 | boolean | false |  |
| description | 自定义描述内容 | string \| ReactNode | - |  |
| imageStyle | 图片样式 | CSSProperties | - |  |
| image | 设置显示图片，为 string 时表示自定义图片地址。 | string \| ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` | 3.12.0 |

## 内置图片 (3.16.0 以上版本)

- Empty.PRESENTED_IMAGE_SIMPLE

  <img src="https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png" height="35px">

- Empty.PRESENTED_IMAGE_DEFAULT

  <img src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" height="100px">
