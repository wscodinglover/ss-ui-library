---
category: Components
subtitle: 发布订阅
type: 公共方法API
title: Observer
order: 1
---

多用于页面之间的数据传递。

## 何时使用

- 复杂页面组件间的数据传递。
- 大数据量如 socket 数据可通过发布订阅进行数据传递。

## API

如何引用？

注意：在 SPA 单页项目中，离开当前页面，必须执行销毁操作，否则会产生多次订阅发布。

```
为什么不考虑在pub或者sub时做过滤？
答：有时会存在链式事件代理的订阅发布式场景存在。
```

```jsx
import { Observer } from 'ss-ui-library';

/*--发布--*/
Observer.pub(eventName, data);
/*--订阅--*/
Observer.sub(eventName, callback(data));
/*--销毁--*/
Observer.destory(eventName);
```
