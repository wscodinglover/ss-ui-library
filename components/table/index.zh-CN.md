---
category: Components
type: 数据展示
title: Table
subtitle: 表格
order: 8
---

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

指定表格的数据源 `dataSource` 为一个数组。

```jsx
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;
```

## API

新增了部分新特性，请看如下标记。

### Table

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `[废弃]`bordered | `[暂定为true]`是否展示外边框和列边框 | boolean | true |  |
| `[修改]`pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination/) 文档，设为 false 时不展示和进行分页 | object | false |  |
| `[新增]`zebra | 背景是否呈现斑马线效果 | boolean | false |  |
| `[新增]`zebraClass | 在 zebra = true 有效，斑马线自定义 class | string | - |  |
| tableLayout | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| 'auto' \| 'fixed' | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` | 3.24.0 |
| childrenColumnName | 指定树形结构的列名 | string\[] | children | 3.4.2 |
| columns | 表格列的配置描述，具体项见下表 | [ColumnProps](https://git.io/JeKZW)\[] | - |  |
| components | 覆盖默认的 table 元素 | [TableComponents](https://git.io/fANxz) | - |  |
| dataSource | 数据数组 | any\[] |  |  |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |  |
| defaultExpandedRowKeys | 默认展开的行 | string\[] | - |  |
| expandedRowKeys | 展开的行，控制属性 | string\[] | - |  |
| expandedRowRender | 额外的展开行 | Function(record, index, indent, expanded):ReactNode | - |  |
| expandIcon | 自定义展开图标，参考[示例](http://react-component.github.io/table/examples/expandIcon.html) | Function(props):ReactNode | - | 3.11.3 |
| expandRowByClick | 通过点击行来展开子行 | boolean | `false` | 3.0.1 |
| expandIconColumnIndex | 展开的图标显示在哪一列，如果没有 `rowSelection`，默认显示在第一列，否则显示在选择框后面 | `number` |  |
| footer | 表格尾部 | Function(currentPageData) |  |  |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |  |
| loading | 页面是否加载中 | boolean\|[object](https://ant.design/components/spin-cn/#API) ([更多](https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135)) | false |  |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: '确定' <br> filterReset: '重置' <br> emptyText: '暂无数据' <br> [默认值](https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511) |  |
| rowClassName | 表格行的类名 | Function(record, index):string | - |  |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string\|Function(record):string | 'key' |  |
| rowSelection | 表格行是否可选择，[配置项](#rowSelection) | object | null |  |
| scroll | 表格是否可滚动，[配置项](#scroll) | object | - |  |
| showHeader | 是否显示表头 | boolean | true |  |
| size | 表格大小 | default \| middle \| small | default |  |
| title | 表格标题 | Function(currentPageData) |  |  |
| onChange | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter, extra: { currentDataSource: [] }) |  |  |
| onExpand | 点击展开图标时触发 | Function(expanded, record) |  |  |
| onExpandedRowsChange | 展开的行变化时触发 | Function(expandedRows) |  |  |
| onHeaderRow | 设置头部行属性 | Function(column, index) | - |  |
| onRow | 设置行属性 | Function(record, index) | - |  |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | `() => TableHtmlElement` | 3.21.0 |

#### onRow 用法

适用于 `onRow` `onHeaderRow` `onCell` `onHeaderCell`。

```jsx
<Table
  onRow={record => {
    return {
      onClick: event => {}, // 点击行
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, // 鼠标移入行
      onMouseLeave: event => {},
    };
  }}
  onHeaderRow={column => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>
```

### Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 设置列的对齐方式 | 'left' \| 'right' \| 'center' | 'left' | 3.3.2 |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 时，表格布局将变成 `tableLayout="fixed"`。 | boolean | false | 3.24.0 |
| className | 列样式类名 | string | - |  |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number |  |  |
| dataIndex | 列数据在数据项中对应的 key，支持 `a.b.c`、`a[0].b.c[1]` 的嵌套写法 | string | - |  |
| defaultFilteredValue | 默认筛选值 | string\[] | - |  |
| defaultSortOrder | 默认排序顺序 | 'ascend' \| 'descend' | - | 3.9.3 |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | React.ReactNode \| (props: [FilterDropdownProps](https://git.io/fjP5h)) => React.ReactNode | - |
| filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |  |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |  |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |  |
| filterIcon | 自定义 filter 图标。 | ReactNode\|(filtered: boolean) => ReactNode | false |  |
| filterMultiple | 是否多选 | boolean | true |  |
| filters | 表头的筛选菜单项 | object\[] | - |  |
| fixed | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean\|string | false |  |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |  |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格[行/列合并](#components-table-demo-colspan-rowspan) | Function(text, record, index) {} | - |  |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function\|boolean | - |  |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean\|string | - |  |
| sortDirections | 支持的排序方式，取值为 `'ascend'` `'descend'` | Array | `['ascend', 'descend']` | 3.15.2 |
| title | 列头显示文字（函数用法 `3.10.0` 后支持） | ReactNode\|({ sortOrder, sortColumn, filters }) => ReactNode | - |  |
| width | 列宽度（[指定了也不生效？](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)） | string\|number | - |  |
| onCell | 设置单元格属性 | Function(record, rowIndex) | - |  |
| onFilter | 本地模式下，确定筛选的运行函数 | Function | - |  |
| onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |  |
| onHeaderCell | 设置头部单元格属性 | Function(column) | - |  |

### ColumnGroup

| 参数  | 说明         | 类型              | 默认值 | 版本 |
| ----- | ------------ | ----------------- | ------ | ---- |
| title | 列头显示文字 | string\|ReactNode | -      |      |

### pagination

分页的配置项。

| 参数     | 说明               | 类型                        | 默认值   | 版本  |
| -------- | ------------------ | --------------------------- | -------- | ----- |
| position | 指定分页显示的位置 | 'top' \| 'bottom' \| 'both' | 'bottom' | 3.3.0 |

更多配置项，请查看 [`Pagination`](/components/pagination/)。

### rowSelection

选择功能的配置。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| columnWidth | 自定义列表选择框宽度 | string\|number | `60px` | 3.3.0 |
| columnTitle | 自定义列表选择框标题 | string\|React.ReactNode | - | 3.8.0 |
| fixed | 把选择框列固定在左边 | boolean | - |  |
| getCheckboxProps | 选择框的默认属性配置 | Function(record) | - |  |
| hideDefaultSelections | [自定义选择项](#components-table-demo-row-selection-custom)时去掉『全选』『反选』两个默认选项 | boolean | false |  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string\[]\|number[] | \[] |  |
| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object\[]\|boolean | true |  |
| type | 多选/单选，`checkbox` or `radio` | string | `checkbox` |  |
| onChange | 选中项发生变化时的回调 | Function(selectedRowKeys, selectedRows) | - |  |
| onSelect | 用户手动选择/取消选择某行的回调 | Function(record, selected, selectedRows, nativeEvent) | - |  |
| onSelectAll | 用户手动选择/取消选择所有行的回调 | Function(selected, selectedRows, changeRows) | - |  |
| onSelectInvert | 用户手动选择反选的回调 | Function(selectedRows) | - |  |

### scroll

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| x | 设置横向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | number \| true | - |  |
| y | 设置纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | number \| true | - |  |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - | 3.24.0 |

### selection

| 参数     | 说明                       | 类型                        | 默认值 | 版本 |
| -------- | -------------------------- | --------------------------- | ------ | ---- |
| key      | React 需要的 key，建议设置 | string                      | -      |      |
| text     | 选择项显示的文字           | string\|React.ReactNode     | -      |      |
| onSelect | 选择项点击回调             | Function(changeableRowKeys) | -      |      |

## 在 TypeScript 中使用

```tsx
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

interface User {
  key: number;
  name: string;
}

const columns: ColumnProps<User>[] = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data: User[] = [{
  key: 0,
  name: 'Jack',
}];

class UserTable extends Table<User> {}
<UserTable columns={columns} dataSource={data} />

// 使用 JSX 风格的 API
class NameColumn extends Table.Column<User> {}

<UserTable dataSource={data}>
  <NameColumn key="name" title="Name" dataIndex="name" />
</UserTable>

// TypeScript 2.9 之后也可以这样写
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#generic-type-arguments-in-jsx-elements
<Table<User> columns={columns} dataSource={data} />
<Table<User> dataSource={data}>
  <Table.Column<User> key="name" title="Name" dataIndex="name" />
</Table>
```

## 注意

按照 [React 的规范](https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys)，所有的数组组件必须绑定 `key`。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

![控制台警告](https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png)

如果 `dataSource[i].key` 没有提供，你应该使用 `rowKey` 来指定 `dataSource` 的主键，如下所示。若没有指定，控制台会出现以上的提示，表格组件也会出现各类奇怪的错误。

```jsx
// 比如你的数据主键是 uid
return <Table rowKey="uid" />;
// 或
return <Table rowKey={record => record.uid} />;
```
