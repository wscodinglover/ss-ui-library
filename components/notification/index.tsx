/**
 * ##################################################################
 * # ModuleName: Notification 通知提醒框
 * # catalog: 反馈组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # width  容器宽度,最终汇总进style    @type{number | string}    @default[300]
 *
 * # 支持方法：
 * # notification.config(config)
 * # notification.open(config)
 * # notification.close(key: String)
 * # notification.destroy()
 *
 * # 暂不支持方法：
 * # notification.success(config)
 * # notification.error(config)
 * # notification.info(config)
 * # notification.warning(config)
 * # notification.warn(config)
 * ##################################################################
 * */
import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';
import classnames from 'classnames';

interface SSArgsProps extends ArgsProps {
  width?: number | string;
}

const SSNotification = (): void => {};

const notificationFn = (props: SSArgsProps, type: string) => {
  const { className, width, style, ...reset } = props;
  // 默认宽度为300
  const Width = width || 300;
  const noticeParams = {
    className: classnames('ss-notification', className),
    style: Object.assign(style || {}, {
      width: `${Width}${typeof Width === 'number' ? 'px' : ''}`,
    }),
    ...reset,
  };
  notification[type]({ ...noticeParams });
};

SSNotification.config = (props: SSArgsProps): void => {
  notificationFn(props, 'config');
};

SSNotification.open = (props: SSArgsProps): void => {
  notificationFn(props, 'open');
};

SSNotification.close = (key: string): void => {
  notification.close(key);
};

SSNotification.destroy = (): void => {
  notification.destroy();
};

export default SSNotification;
