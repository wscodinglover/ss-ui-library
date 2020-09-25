---
category: Components
subtitle: socket机制
type: 公共方法API
title: Websocket
order: 1
---

多用于页面之间的数据传递。

## 何时使用

- 复杂页面组件间的数据传递。
- 大数据量如socket数据可通过发布订阅进行数据传递。

## API

如何引用？

```jsx
import {Observer} from 'ss-ui-library'

/*--发布--*/
Observer.pub(eventName, data)
/*--订阅--*/
Observer.sub(eventName, callback(data))
/*--销毁--*/
Observer.destory(eventName)

```

