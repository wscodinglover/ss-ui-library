import React from 'react';

interface ConfigProviderProps {
  renderRightMenu: React.ReactNode
}

// @ts-ignore
export const ConfigContext = React.createContext()

export const ConfigConsumer = ConfigContext.Consumer;

export const WithConfigConsumer = (props: ConfigProviderProps) => {
  const {renderRightMenu} = props;

  // 右键菜单
  const RightMenuView = () => {

  }

  return (
    <ConfigConsumer>
      {renderRightMenu && RightMenuView}
    </ConfigConsumer>
  )
}
