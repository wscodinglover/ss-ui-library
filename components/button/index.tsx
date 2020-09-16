import React from 'react';
import {Button} from 'antd'
import classNames from 'classnames';
import SS_Spin from '../spin';

/*
* @notice: 基于antd Button组件，以下是自定义新增部分
* @params: {Boolean} basic   深绿色主题
* @params: {Boolean} yellow  温暖主题
* @params: {Boolean} error   错误主题
* @params: {Boolean} gray    灰色主题
*
* */

interface ButtonProps {
  basic: boolean,
  yellow: boolean,
  error: boolean,
  gray: boolean,
  icon: string,
  loading: boolean,
  children: React.ReactNode
}

class SS_Button extends React.Component<ButtonProps, any> {
  // default Value
  static defaultProps = {
    basic: false,
    yellow: false,
    error: false,
    gray: false,
  }

  // eslint-disable-next-line class-methods-use-this
  private loadingView() : JSX.Element {
    const ssLoading = {
      show: true,
      lineStroke: '#FFEBC8',
    }

    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <SS_Spin ssLoading={ssLoading} />
    )
  }

  public render() {
    const {loading, basic, yellow, error, gray, icon, children, ...reset} = this.props;

    return (
      <Button
        className={classNames('ss-btn',
          {'ss-btn-basic': basic},
          {'ss-btn-yellow': yellow},
          {'ss-btn-error': error},
          {'ss-btn-gray': gray})}
        {...reset}>
        {icon && <span className="sumscope-icon ss-btn-icon">{icon}</span>}
        <div className={classNames('ss-btn-child',{'hidden': loading})}>{children}</div>
        {loading && this.loadingView()}
      </Button>
    )
  }
}

export default SS_Button;
