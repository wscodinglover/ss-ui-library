/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import

const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn && // eslint-disable-line no-console
  typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of ss-ui-library, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

/**
 * @moduleName Button 按钮
 * @catalog 通用组件
 * */
export { default as Button } from './button';

/**
 * @moduleName Icon 图标
 * @catalog 通用组件
 * */
export { default as Icon } from './icon';

/**
 * @moduleName Row
 * @catalog 布局组件
 * */
export { default as Row } from './row';

/**
 * @moduleName Col
 * @catalog 布局组件
 * */
export { default as Col } from './col';

/**
 * @moduleName Layout 布局
 * @catalog 布局组件
 * */
export { default as Layout } from './layout';

/**
 * @moduleName DropDown 下拉菜单
 * @catalog 导航组件
 * */
export { default as Dropdown } from './drop-down';

/**
 * @moduleName Menu 菜单
 * @catalog 导航组件
 * */
export { default as Menu } from './menu';

/**
 * @moduleName Pagination 分页器
 * @catalog 导航组件
 * */
export { default as Pagination } from './pagination';

/**
 * @moduleName CheckBox 复选框
 * @catalog 数据录入组件
 * */
export { default as CheckBox } from './checkbox';

/**
 * @moduleName DatePicker 日期选择框
 * @catalog 数据录入组件
 * */
export { default as DatePicker } from './date-picker';

/**
 * @moduleName Radio 单选框
 * @catalog 数据录入组件
 * */
export { default as Radio } from './radio';

/**
 * @moduleName Collapse 折叠面板
 * @catalog 数据展示组件
 * */
export { default as Collapse } from './collapse';

/**
 * @moduleName Calendar 日历
 * @catalog 数据展示组件
 * */
export { default as Calendar } from './calendar';

/**
 * @moduleName Empty 空状态
 * @catalog 数据展示组件
 * */
export { default as Empty } from './empty';

/**
 * @moduleName Alert 警告提示
 * @catalog 反馈组件
 * */
export { default as Alert } from './alert';

/**
 * @moduleName Modal 模态框
 * @catalog 反馈组件
 * */
export { default as Modal } from './modal';

/**
 * @moduleName message 全局提示
 * @catalog 反馈组件
 * */
export { default as message } from './message';

/**
 * @moduleName notification 通知提醒框
 * @catalog 反馈组件
 * */
export { default as notification } from './notification';

/**
 * @moduleName Popconfirm 气泡确认框
 * @catalog 反馈组件
 * */
export { default as Popconfirm } from './popconfirm';

/**
 * @moduleName Spin 加载中
 * @catalog 反馈组件
 * */
export { default as Spin } from './spin';

/**
 * @moduleName ConfigProvider 全局化配置
 * @catalog 其他
 * */
export { default as ConfigProvider } from './config-provider';

export { default as version } from './version';

export { default as Table } from './table';

export { default as Tabs } from './tabs';

export { default as DrawerPanel } from './drawer-panel/index';

export { default as Input } from './input/index';

export { default as Slider } from './slider';

export { default as Switch } from './switch';

export { default as InputNumber } from './input-number';

export { default as Select } from './select';

export { default as Form } from './form';

export { default as TreeSelect } from './select-tree';

export { default as Tooltip } from './tooltip';

export { default as Tree } from './tree';

export { default as Transfer } from './transfer';

export { default as BarChart } from './echarts-bar';

export { default as LineChart } from './echarts-line';

export { default as ScatterChart } from './echarts-scatter';

export { default as RadarChart } from './echarts-radar';

export { default as PieChart } from './echarts-pie';

export { default as CandlestickChart } from './echarts-candlestick';

export { default as Observer } from './observer';

export { default as Websocket } from './websocket';
