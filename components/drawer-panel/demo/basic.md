---
order: 0
title:
  zh-CN: 基本风格
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest use

```jsx
import { DrawerPanel } from 'ss-ui-library';

function OnBtnClick (openStatus) {
  console.log(openStatus)
}

ReactDOM.render(
  <>
    <DrawerPanel onBtnClick={OnBtnClick}>
      <div>I am test content</div>
      <div>I am test content</div>
      <div>I am test content</div>
      <div>I am test content</div>
    </DrawerPanel>
  </>
, mountNode);
```
<style>
    .ss-drawer-panel{
        margin-bottom: 20px;
    }
</style>
