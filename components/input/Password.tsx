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

const SS_Password = React.forwardRef((props: PasswordProps, ref: any) => {
  const {className, ...reset} = props;
  return (
    <div ref={ref}>
      <Password
        className={classNames(className, 'ss-input ss-input-password')}
        {...reset}
      />
    </div>
  )
})

export default SS_Password;
