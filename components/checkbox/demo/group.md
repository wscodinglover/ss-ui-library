---
order: 2
title:
  zh-CN: CheckBox 组合
  en-US: CheckBox 组合
---

## zh-CN

方便的从数组生成 Checkbox 组。

## en-US

方便的从数组生成 Checkbox 组。

```jsx
import { CheckBox } from 'ss-ui-library';

const {Group} = CheckBox;

const options = [
  'Apple',
  'Pear',
  'Orange'
];
const options1 = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

ReactDOM.render(
    <div className="example">
      <Group options={options} defaultValue={['Apple']} onChange={onChange} />
      <br/>
      <Group options={options1} defaultValue={['Pear']} onChange={onChange} />
    </div>
, mountNode);
```
```css
.example{
    padding: 20px;
    background: #1e1e1e;
}
```
