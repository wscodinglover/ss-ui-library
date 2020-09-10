---
order: 1
title:
  zh-CN: ss - loading
  en-US: Add loading text
---

## zh-CN

默认提供自定义ss-loading模板，更多多模板待开发

## en-US

默认提供自定义ss-loading模板，更多多模板待开发


```jsx
import { Spin } from 'ss-ui-lib';

const ssLoading = {
  show: true,
  outward: 40,
  text: "加载中"
}

ReactDOM.render(
  <>
    <div className="example">
      <Spin ssLoading={ssLoading}/>
    </div>
  </>
, mountNode);
```
```css
.example{
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: #1E1E1E;
    text-align: center;
}
```
