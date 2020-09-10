import React  from 'react';
import classNames from 'classnames';
import { Tabs } from 'antd';

const {TabPane} = Tabs;

// 组件传递来的数据的类型定义
interface tabsProps {
  className: string,
  theme: string,
  dataSource: [object]
  // 是否居中
  centered: string
}

// pane的接口定义
interface tabsPaneProps {
  // key值，也是定义tab的值
  key: string,
  tab: string | React.ReactNode,
  // 是否禁止
  disabled: boolean,
  // 自定义
  render: React.ReactNode
}

function SS_Tabs (props: tabsProps) {
  const {className, dataSource, theme, centered, ...reset} = props
  return (
    <Tabs
      className={classNames(className,
        {'ss-tabs': theme==='ss',
          'ss-tabs-center': centered})}
      {...reset}>
      {
        dataSource.map((item: tabsPaneProps) => {
          return (
            <TabPane
              key={item.key}
              tab={item.tab}
              disabled={item.disabled}>
              {item.render}
            </TabPane>
          )
        })
      }
    </Tabs>
  )
}

SS_Tabs.defaultProps = {
  dataSource: [],
  animated: false,
}

export default SS_Tabs;
