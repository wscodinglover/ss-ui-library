---
category: Components
type: 通用组件
title: Icon
subtitle: 图标
order: 2
---

`图标组件是新增组件，使用方法不同于antd，antd不具备参考价值`

## 图标列表

```__react
import IconDisplay from 'site/theme/template/IconDisplay';
ReactDOM.render(<IconDisplay />, mountNode);
```

## API

图标的属性说明如下：

| 属性      | 说明                     | 类型             | 默认值       |
| --------- | ------------------------ | ---------------- | ------------ |
| className | 给 icon 添加自定义 class | string           | -            |
| value     | icon 的 unicode 值       | string           | -            |
| fontSize  | icon 大小自定义          | number \| string | 12 or '12px' |
| color     | icon 颜色自定义          | string \| rgb    | -            |

<style>
.code-box-demo {
    background: #1e1e1e;
}
</style>
