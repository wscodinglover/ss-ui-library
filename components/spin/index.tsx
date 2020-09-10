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
interface spinProps {
  // class
  className: string,
  // 加载内容
  ssLoading: any,
  indicator: any
}

interface ssIconProps {
  // 加载内容
  text?: string,
  children: ReactNode,
  // 线条加载颜色
  lineStroke?: string | undefined,
  outward: number | undefined
}

function SS_Spin (props: spinProps) {
  const {className, ssLoading, indicator, ...reset} = props;
  // 自定义部分显示ss模板还是其他自定义
  const Indicator = ssLoading && ssLoading.show ? <SSIcon {...ssLoading} /> : indicator
  return (
      <Spin className={classNames(className, "ss-loading-box")}
            indicator={Indicator}
            {...reset}/>
    )
}

function SSIcon (props: ssIconProps) {
  const {outward, lineStroke, text, children} = props
  return (
    <div>
      <svg
        className="ss-loading"
        style={{width: `${outward}px`, height: `${outward}px`}}
        viewBox="20 20 40 40">
        <circle
          className="cir-loading"
          stroke={lineStroke}
          cx="40"
          cy="40"
          r="15"
          fill="none"/>
      </svg>
      <p>
        {text && <span>{text}</span>}
        {children}
      </p>
    </div>
  )
}

// 默认值
SSIcon.defaultProps = {
  lineStroke: '#136C5E',
  text: "",
  outward: 16,
}

export default SS_Spin;
