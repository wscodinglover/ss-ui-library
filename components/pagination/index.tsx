/**
 * ##################################################################
 * # ModuleName: Pagination 分页器
 * # catalog: 导航组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # 备注：
 * 按照Sumscope UI 规范，废弃很多无用API
 *
 * # Component API新增或修改:
 * # className          自定义class名称    @type{string}       @default[ss-btn]
 * ##################################################################
 * */
import React from 'react';
import {Pagination} from "antd";
import classNames from 'classnames'

type PaginationProps = {
  className: string
}

const SSPagination: React.FC<PaginationProps> = props => {
  const {className, ...reset} = props
  return (
    <Pagination
      className={classNames('ss-pagination', className)}
      {...reset}
    />
  )
};

export default SSPagination;
