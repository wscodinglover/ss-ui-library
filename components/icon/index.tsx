import React from 'react';
import classNames from 'classnames';

interface iconProps {
  className: string,
  value: string,
  fontSize: string | number,
  color: string
}

function SS_Icon (props: iconProps) {
  const {className, value, fontSize, color} = props
  return (
    <span
      className={classNames('sumscope-icon', className)}
      style={{fontSize: typeof fontSize === 'string' ? fontSize : `${fontSize}px`, color}}
    >
      {value}
    </span>
  )
}

export default SS_Icon;
