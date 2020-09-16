import React from 'react';
import {Pagination} from "antd";
import classNames from 'classnames'

interface PaginationProps {
  className: string
}

const SS_Pagination = (props: PaginationProps) => {
  const {className, ...reset} = props
  return (
    <Pagination
      className={classNames('ss-pagination', className)}
      {...reset}
    />
  )
};

export default SS_Pagination;
