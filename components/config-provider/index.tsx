import React, { createContext } from 'react';

const SS_Config_Provider = (props: any) => {
  const { children, ...reset } = props;
  // @ts-ignore
  const globContext = createContext();
  const { Provider } = globContext;

  return <Provider {...reset}>{children}</Provider>;
};

export default SS_Config_Provider;
