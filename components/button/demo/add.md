---
order: 1
title:
  zh-CN: 新增部分
  en-US: Add
---

## zh-CN

新增部分：`basic`, `yellow`, `error`, `gray`

## en-US

新增部分：`basic`, `yellow`, `error`, `gray`

```jsx
import { Button } from 'ss-ui-library';

ReactDOM.render(
  <>
    <Button type="primary" basic>
      Test Button
    </Button>
    <Button type="dashed" basic>
      Test Button
    </Button>
    <Button type="text" basic>
      Test Button
    </Button>
    <Button type="link" basic>
      Test Button
    </Button>
    <br />
    <Button type="primary" yellow>
      Test Button
    </Button>
    <Button type="dashed" yellow>
      Test Button
    </Button>
    <Button type="text" yellow>
      Test Button
    </Button>
    <Button type="link" yellow>
      Test Button
    </Button>
    <br />
    <Button type="primary" error>
      Test Button
    </Button>
    <Button type="dashed" error>
      Test Button
    </Button>
    <Button type="text" error>
      Test Button
    </Button>
    <Button type="link" error>
      Test Button
    </Button>
    <br />
    <Button type="primary" gray>
      Test Button
    </Button>
    <Button type="dashed" gray>
      Test Button
    </Button>
    <Button type="text" gray>
      Test Button
    </Button>
    <Button type="link" gray>
      Test Button
    </Button>
  </>,
  mountNode,
);
```
