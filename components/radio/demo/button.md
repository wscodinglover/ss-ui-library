---
order: 4
title:
  zh-CN: Radio.Button组合
  en-US: Radio.Button组合
---

## zh-CN

实色填底的单选按钮样式， 可作为 Filter 去使用。

## en-US

实色填底的单选按钮样式， 可作为 Filter 去使用

```jsx
import { Radio, Button, Modal } from 'ss-ui-library';

ReactDOM.render(
  <div className="example">
    <h4>实底按钮</h4>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <br />
    <h4>边框按钮</h4>
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </div>,
  mountNode,
);
```
