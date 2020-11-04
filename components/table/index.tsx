import React from 'react';
import { Table, ConfigProvider } from 'antd';
import classNames from 'classnames';
import SS_Empty from '../empty';

const { Column, ColumnGroup } = Table;

// 组件传递来的数据的类型定义
interface tableProps {
  // class
  className: string;
  rowClassName?: Function;
  // 列数据配置项
  columns: Array<object>;
  zebra: boolean;
  zebraClass?: string;
  renderEmptyNode: React.ReactNode;
}

// col接口类型
interface colProps {
  // 列名称
  title?: any;
  dataIndex?: any;
  key?: string;
  render?: any;
}

function SS_Table(props: tableProps) {
  const { className, rowClassName, columns, zebra, zebraClass, renderEmptyNode, ...reset } = props;

  // handle row class
  const getRowClass = (_record: any, index: number): string | undefined => {
    const rowclass = [];
    if (zebra) {
      if ((index + 1) % 2 === 1) {
        rowclass.push(zebraClass || 'zebra-highlight');
      }
    }
    if (rowClassName) {
      rowclass.push(rowClassName(_record, index));
    }
    return rowclass.join(' ');
  };

  // @ts-ignore
  return (
    // @ts-ignore
    // eslint-disable-next-line react/jsx-pascal-case
    <ConfigProvider renderEmpty={() => renderEmptyNode || <SS_Empty />}>
      <Table
        className={classNames(className, 'ss-table')}
        bordered
        // @ts-ignore
        rowClassName={getRowClass}
        {...reset}
      >
        {columns.map((col: colProps, index: number) => {
          const { title, dataIndex, key, render, ...colReset } = col;
          if (title.children && title.children.length) {
            return (
              <ColumnGroup
                title={title.default}
                key={key ? `col-${index}-${Date.now()}` : Date.now()}
              >
                {title.children.map((child: String, cindex: number) => {
                  return (
                    <Column
                      title={child}
                      dataIndex={dataIndex[cindex]}
                      key={key ? `${key[cindex]}-${index}-${Date.now()}` : Date.now()}
                      render={render}
                      {...colReset}
                    />
                  );
                })}
              </ColumnGroup>
            );
          }
          return (
            <Column
              title={title}
              dataIndex={dataIndex}
              key={`${col.key}${index}` || Date.now()}
              render={render}
              {...colReset}
            />
          );
        })}
      </Table>
    </ConfigProvider>
  );
}

// default value
SS_Table.defaultProps = {
  // 默认不显示分页器
  pagination: false,
};

export default SS_Table;
