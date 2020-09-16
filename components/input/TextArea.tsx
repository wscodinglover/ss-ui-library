/*
* @Author Davis.qi
* @Date 2020/9/11
* */
import React from 'react';
import {Input} from 'antd';
import classNames from 'classnames';

const {TextArea} = Input;

type TextAreaProps = {
  className: string,
  size?: object | undefined,
}

function SS_TextArea(props: TextAreaProps) {
  const {className, size, ...reset} = props;
  // @ts-ignore
  const width = size && size.x ? `${size.x}px` : '100%'
  // @ts-ignore
  const height = size && size.y ? `${size.y}px` : 'auto'
  return (
    <TextArea
      className={classNames(className, 'ss-textarea', 'ss-input')}
      style={{width, height}}
      {...reset}
    />
  )
}

export default SS_TextArea;
