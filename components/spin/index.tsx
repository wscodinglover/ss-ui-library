import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Spin } from 'antd';

/*
 * @notice: Spin加载组件
 * @params: {color Hex | rgb} lineStroke   圆形加载线条颜色
 * @params: {number} outward   loading图标的外观大小，及宽高的值, 默认16
 * @params: {String} text  加载文字提示
 * @params: {reactNode} children  自定义加载文字,直接在Spin标签中写入children
 *
 * */

// 组件传递来的数据的类型定义
type spinProps = {
  // 加载内容
  ssLoading: any;
};

type ssIconProps = {
  // 加载内容
  text?: string;
  children: ReactNode;
  // 线条加载颜色
  lineStroke?: string | undefined;
  outward: number | undefined;
};

function SS_Spin(props: spinProps) {
  // @ts-ignore
  const { ssLoading, indicator, spinning, ...reset } = props;
  // 自定义部分显示ss模板还是其他自定义
  let Indicator: any;
  let Spinning: boolean;
  if (ssLoading) {
    Indicator = <SSIcon {...ssLoading} />;
    Spinning = ssLoading.show;
  } else {
    Indicator = indicator;
    Spinning = spinning !== undefined ? spinning : true;
  }
  return (
    <Spin
      className={classNames('ss-loading-box')}
      indicator={Indicator}
      spinning={Spinning}
      {...reset}
    />
  );
}

function SSIcon(props: ssIconProps) {
  const { outward, lineStroke, text, children } = props;
  return (
    <>
      <svg
        className="ss-loading"
        style={{ width: `${outward}px`, height: `${outward}px` }}
        viewBox="20 20 40 40"
      >
        <circle className="cir-loading" stroke={lineStroke} cx="40" cy="40" r="15" fill="none" />
      </svg>
      <p>
        {text && <span>{text}</span>}
        {children}
      </p>
    </>
  );
}

// 默认值
SSIcon.defaultProps = {
  lineStroke: '#136C5E',
  text: '',
  outward: 16,
};

export default SS_Spin;
