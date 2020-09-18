import {notification} from 'antd'

const ss_notification = (options: any) => {
  const {eventName} = options;
  // 定义class
  options.className = options.className ? `${options.className} ss-market-notice` : 'ss-market-notice';
  // 定义弹出方向，默认bottomRight
  options.placement = options.placement || 'bottomRight';
  notification[eventName || 'open'](options);
};

export default ss_notification;
