---
order: 1
title:
  zh-CN: 手风琴
  en-US: accordion
---

## zh-CN

手风琴，每次只打开一个 tab。

## en-US

手风琴，每次只打开一个 tab。

```jsx
import { Collapse } from 'ss-ui-library';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <div className="example">
    <Collapse accordion>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
  </div>,
  mountNode,
);
```
