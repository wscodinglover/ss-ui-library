import React from 'react';
import classNames from 'classnames';

// 方向对应的class
const placementObj = {
  topLeft: 'top-left',
  top: 'top',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottom: 'bottom',
  bottomRight: 'bottom-right',
}

type PanelProps = {
  className: string,
  placement: string,
  animated: boolean,
  defaultopen: number,
  onBtnClick: any,
  onOpen: any,
  onClose: any
}
class DrawerPanel extends React.Component<PanelProps, any> {
  // default value
  static defaultProps = {
    animated: false,
    // 0: false 1: true
    defaultopen: 1,
    placement: 'bottom',
  }
  //
  // // 类型检测
  // static propTypes = {
  //   // 自定义class
  //   className: PropTypes.string,
  //   placement: PropTypes.string,
  //   animated: PropTypes.bool,
  //   defaultopen: PropTypes.number
  // }

  state = {
    open: Boolean(this.props.defaultopen),
    allowIconStr: ''
  }

  // 切换显示内容区域
  toggleContent (onBtnClick: any, onOpen: any, onClose: any) {
    const {open} = this.state
    this.setState({
      open: !open,
    }, () => {
      // eslint-disable-next-line no-shadow
      const {open} = this.state
      // eslint-disable-next-line no-unused-expressions
      onBtnClick && onBtnClick(open, this)
      // 显示后的回调
      if (open) {
        // eslint-disable-next-line no-unused-expressions
        onOpen && onOpen(this)
      } else {
        // eslint-disable-next-line no-unused-expressions
        onClose && onClose(this)
      }
      this.allowIcon()
    })
  }

  // 箭头icon方向判别
  allowIcon () {
    if (this.props.placement.startsWith('top')) {
      this.setState({
        allowIconStr: this.state.open ? '&#xe82f;' : '&#xe795;'
      })
    }
    if (this.props.placement.startsWith('bottom')) {
      this.setState({
        allowIconStr: this.state.open ? '&#xe795;' : '&#xe82f;'
      })
    }
  }

  componentDidMount() {
    // 初始化判别方向icon
    this.allowIcon()
  }

  render() {
    const {className, children, placement, animated, onBtnClick, onOpen, onClose, ...reset} = this.props;
    // 内容区域的class定义规则
    let contentAnimateClass = ''
    if (animated) {
      contentAnimateClass = this.state.open ? 'slide-open' : 'slide-close'
    } else {
      contentAnimateClass = this.state.open ? 'open' : 'close'
    }

    return (
      <div
        className={classNames(className,
          'ss-drawer-panel',
          `ss-drawer-panel-${placement.startsWith('top') ? 'pad-top' : 'pad-bottom'}`,
          {'ss-drawer-panel-hide': !this.state.open})}
        {...reset}>
        <div
          className={classNames("ss-drawer-panel-btn",
            `ss-drawer-panel-btn-${placementObj[placement]}`)}
          onClick={this.toggleContent.bind(this, onBtnClick, onOpen, onClose)}>
          <span
            className="sumscope-icon"
            dangerouslySetInnerHTML={{ __html: this.state.allowIconStr }} />
        </div>
        <div
          className={classNames("ss-drawer-panel-content", contentAnimateClass)}>
          {children}
        </div>
      </div>
    )
  }
}

export default DrawerPanel;
