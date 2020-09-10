---
order: 0
title:
  zh-CN: 图标大小
  en-US: Icon size
---

## zh-CN

传入font-size可以自定义图标大小，默认12px

## en-US

传入font-size可以自定义图标大小，默认12px

  ```jsx
import { Icon } from 'ss-ui-library';

ReactDOM.render(
  <>
    <Icon value="&#xe7c0;" fontSize={14} />
    <Icon value="&#xe7c0;" fontSize={'16px'}/>
    <Icon value="&#xe7c0;" fontSize={18}/>
    <Icon value="&#xe7c0;" fontSize={'20px'}/>
  </>,
  mountNode,
);
```
