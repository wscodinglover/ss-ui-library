---
category: Components
type: 数据展示
title: Icon
subtitle: 图标
---

`图标组件是新增组件，使用方法不同于antd，antd不具备参考价值`

## 图标列表

```__react
import IconDisplay from 'site/theme/template/IconDisplay';
ReactDOM.render(<IconDisplay />, mountNode);
```

## API

图标的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 给icon添加自定义class | string | - |
| value | icon的unicode值 | string | - |
| fontSize | icon大小自定义 | number \| string | 12 or '12px' |
| color | icon颜色自定义 | string \| rgb | - |
