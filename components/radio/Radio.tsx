import React from 'react';
import {Radio} from "antd";
import classNames from 'classnames';

interface RadioProps {
  className?: string
}

const SS_Radio = (props: RadioProps) => {
  const {className, ...reset} = props;
  return (
    <Radio
      className={classNames('ss-Radio-wrap', className)}
      {...reset}
    />
  )
};

SS_Radio.Button = Radio.Button;

export default SS_Radio;
