---
order: 2
title:
  zh-CN: 带标签的滑块
  en-US: 带标签的滑块
---

## zh-CN

使用 marks 属性标注分段式滑块，使用 value / defaultValue 指定滑块位置。当 included=false 时，表明不同标记间为并列关系。当 step=null 时，Slider 的可选值仅有 marks 标出来的部分。

## en-US

使用 marks 属性标注分段式滑块，使用 value / defaultValue 指定滑块位置。当 included=false 时，表明不同标记间为并列关系。当 step=null 时，Slider 的可选值仅有 marks 标出来的部分。

```jsx
import { Slider } from 'ss-ui-library';

const marks = {
    10: '4°C',
    40: '12°C',
};

ReactDOM.render(
  <Slider marks={marks} />
, mountNode);
```
