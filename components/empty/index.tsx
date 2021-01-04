/**
 * ##############################################################################
 * # ModuleName: Empty 空状态
 * # catalog: 数据展示
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #############################################################################
 * # Component API新增或修改:
 * # className    自定义class名称    @type{string}               @default[ss-empty]
 * # vertical     是否垂直显示        @type{boolean}              @default[false]
 * # description  自定义描述内容      @type{string | ReactNode}   @default[]
 * # icon         自定义图标         @type{string}               @default[]
 * # iconSize     自定义图标大小      @type{number | string}      @default[]
 * ##############################################################################
 * */
import React from 'react';
import classnames from 'classnames';
import SSIcon from '../icon';

interface SSEmptyProps {
  className?: string;
  vertical?: boolean;
  description?: string | React.ReactNode;
  icon?: string;
  iconSize?: number | string;
}

const SSEmpty: React.FC<SSEmptyProps> = props => {
  const { className, vertical, description, icon, iconSize, ...reset } = props;
  const defaultDesc = 'No Data / No Source';
  const emptyParams = {
    className: classnames('ss-empty', { 'ss-empty-colum': vertical }, className),
    ...reset,
  };
  return (
    <div {...emptyParams}>
      <SSIcon value={icon} fontSize={iconSize} />
      <p className="desc">{description || defaultDesc}</p>
    </div>
  );
};

export default SSEmpty;
