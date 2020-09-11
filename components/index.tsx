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

export { default as Star } from './star';

export { default as version } from './version';

export { default as Button } from './button';

export { default as Icon } from './icon';

export { default as Spin } from './spin';

export { default as Table } from './table';

export { default as Tabs } from './tabs';

export { default as DatePicker } from './date-picker';

export { default as DrawerPanel } from './drawer-panel/index';

export { default as Collapse } from './collapse/index';

export { default as Input } from './input/index';
