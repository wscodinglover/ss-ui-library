/**
 * ############################################################################
 * # ModuleName: Radio 单选框
 * # catalog: 数据录入组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * ############################################################################
 * # Component API新增或修改:
 * # className  自定义class名称    @type{string}       @default[ss-Radio-wrap]
 *
 * # Radio.Group
 * # vertical   是否垂直显示       @type{boolean}      @default[false]
 *
 * # Radio.Button
 *
 * ############################################################################
 * */

import React from 'react';
import { Radio } from 'antd';
import { RadioProps } from 'antd/lib/radio';
import classnames from 'classnames';
import Group from './Group';

interface SSRadioProps extends RadioProps {
  className?: string;
}

const SSRadio = (props: SSRadioProps) => {
  const { className, ...reset } = props;
  const RadioParams = {
    className: classnames('ss-Radio-wrap', className),
    ...reset,
  };
  return <Radio {...RadioParams} />;
};

SSRadio.Group = Group;
SSRadio.Button = Radio.Button;

export default SSRadio;
