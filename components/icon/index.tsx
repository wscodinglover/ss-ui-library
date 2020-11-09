import React from 'react';
import classNames from 'classnames';

interface IconProps {
  className: string;
  value: string;
  fontSize: string | number;
  color: string;
}

function SS_Icon(props: IconProps) {
  const { className, value, fontSize, color, ...reset } = props;
  return (
    <span
      className={classNames('sumscope-icon', className)}
      style={{ fontSize: typeof fontSize === 'string' ? fontSize : `${fontSize}px`, color }}
      {...reset}
    >
      {value}
    </span>
  );
}

export default SS_Icon;
