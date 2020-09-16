/*
* @Author Davis.qi
* @Date 2020/9/11
* */
import React from 'react';
import {Input} from 'antd';
import classNames from 'classnames';

const {Password} = Input;

type PasswordProps = {
  className: string
}

function SS_Password (props: PasswordProps) {
  const {className, ...reset} = props;
  return (
    <Password
      className={classNames(className, 'ss-input ss-input-password')}
      {...reset}
    />
  )
}

export default SS_Password;
