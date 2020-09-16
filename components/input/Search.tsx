/*
* @Author Davis.qi
* @Date 2020/9/11
* */
import React from 'react';
import classNames from 'classnames';
import SS_Input from './Input';

type SearchProps = {
  className: string,
  disabled: boolean
}

function SearchIcon () {
  return (
    <span className="sumscope-icon icon-search">&#xe80b;</span>
  )
}

function SS_Search(props: SearchProps) {
  const {className, ...reset} = props;
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <SS_Input
      className={classNames(className, 'ss-input-search', {'ss-input-search-disabled': props.disabled})}
      // @ts-ignore
      prefix={<SearchIcon />}
      allowClear
      {...reset} />
  )
}

export default SS_Search;
