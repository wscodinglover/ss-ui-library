---
order: 0
title: Quick Start
---

`ss-ui-library` is a component library based on Ant Design.

---

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install ss-ui-library
```

```bash
$ yarn add ss-ui-library
```

If you are in a bad network environment, you can try other registries and tools like [cnpm](https://github.com/cnpm/cnpm).

## Usage

```jsx
import { Star } from 'ss-ui-library';
ReactDOM.render(<div><Star/><span>name</span><div/>, mountNode);
```

And import stylesheets manually:

```jsx
import 'ss-ui-library/dist/ss-ui-library.css'; // or 'ss-ui-library/dist/ss-ui-library.less'
```

### Use modularized antd

> Note: ss-ui-library support ES6 tree shaking by default even without the below plugin.

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "ss-ui-library", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
    ]
  }
  ```

  This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

  ```jsx
  // import js and css modularly, parsed by babel-plugin-import
  import { Star } from 'ss-ui-library';
  ```

- Manually import

  ```jsx
  import Star from 'ss-ui-library/es/star'; // for js
  import 'ss-ui-library/es/star/style/css'; // for css
  // import 'ss-ui-library/es/star/style';         // that will import less
  ```
