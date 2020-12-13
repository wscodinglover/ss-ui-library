/**
 * ##################################################################
 * # ModuleName: Spin 加载中
 * # catalog: 反馈组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # show         SPin的loading状态                @type{string}       @default[false]
 * # text         自定义加载中字符串               @type{boolean}      @default[]
 * # lineStroke   sumscope loading线条颜色         @type{boolean}      @default[#136C5E]
 * # outward      sumscope loading外观大小（直径） @type{boolean}      @default[16]
 * ##################################################################
 * */
import React from 'react';
import { Spin } from 'antd';
import {SpinProps} from 'antd/lib/spin'
import classnames from 'classnames';

type ssLoadingProps = {
  show?: false,
  text?: string;
  // 线条加载颜色
  lineStroke?: string | undefined;
  outward?: number | undefined;
}

// 组件传递来的数据的类型定义
interface SSSpinProps extends SpinProps{
  // 加载内容
  ssLoading?: ssLoadingProps
}

/**
 * Sumscope UI 标准Spin loading渲染
 *
 * */
const SSSvgIcon: React.FC<ssLoadingProps> = props => {
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
  )
};

const SSSpin: React.FC<SSSpinProps> = props => {
  const { ssLoading, indicator, spinning, ...reset } = props;
  // 自定义部分显示ss模板还是其他自定义
  let Indicator: any;
  let Spinning: boolean | undefined;
  if (ssLoading && JSON.stringify(ssLoading) !== '{}') {
    Indicator = <SSSvgIcon {...ssLoading} />;
    Spinning = ssLoading.show;
  } else {
    Indicator = indicator;
    Spinning = spinning !== undefined ? spinning : true;
  }
  return (
    <Spin
      className={classnames('ss-loading-box')}
      indicator={Indicator}
      spinning={Spinning}
      {...reset}
    />
  );
};

// 默认值
SSSvgIcon.defaultProps = {
  lineStroke: '#136C5E',
  text: '',
  outward: 16,
};

export default SSSpin;
