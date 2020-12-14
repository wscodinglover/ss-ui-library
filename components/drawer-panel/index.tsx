import React from 'react';
import classnames from 'classnames';

// 方向对应的class
const placementObj = {
  topLeft: 'top-left',
  top: 'top',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottom: 'bottom',
  bottomRight: 'bottom-right',
  leftTop: 'left-top',
  left: 'left',
  leftBottom: 'left-bottom',
  rightTop: 'right-top',
  right: 'right',
  rightBottom: 'right-bottom',
};

type PanelProps = {
  className?: string;
  placement: string;
  animated?: boolean;
  defaultopen?: number;
  onBtnClick?: any;
  onOpen?: any;
  onClose?: any;
};

class DrawerPanel extends React.PureComponent<PanelProps, any> {
  static defaultProps = {
    animated: false,
    // 0: false 1: true
    defaultopen: 1,
    placement: 'bottom',
  };

  state = {
    open: Boolean(this.props.defaultopen),
    allowIconStr: '',
  };

  placementPadClass = () => {
    const { placement } = this.props;
    let placeClass: any;
    if (placement.startsWith('top')) {
      placeClass = 'top';
    }
    if (placement.startsWith('bottom')) {
      placeClass = 'bottom';
    }
    if (placement.startsWith('left')) {
      placeClass = 'left';
    }
    if (placement.startsWith('right')) {
      placeClass = 'right';
    }
    return {
      pad: `pad-${placeClass}`,
      place: ['top', 'bottom'].includes(placeClass) ? 'row' : 'col',
    };
  };

  /**
   * 切换显示内容区域
   *
   * */
  toggleContent = () => {
    const openStatus = this.state.open;
    const { onBtnClick, onOpen, onClose } = this.props;
    this.setState(
      {
        open: !openStatus,
      },
      () => {
        const { open } = this.state;
        if (onBtnClick) {
          onBtnClick(open);
        }
        // 显示后的回调
        if (open && onOpen) {
          onOpen(this);
        }
        if (open && onClose) {
          onClose(this);
        }
        this.allowIcon();
      },
    );
  };

  /**
   * 箭头icon方向判别
   *
   * */
  allowIcon = () => {
    const { open } = this.state;
    const { placement } = this.props;
    if (placement.startsWith('top')) {
      this.setState({
        allowIconStr: open ? '&#xe82f;' : '&#xe795;',
      });
    }
    if (placement.startsWith('bottom')) {
      this.setState({
        allowIconStr: open ? '&#xe795;' : '&#xe82f;',
      });
    }
    if (placement.startsWith('left')) {
      this.setState({
        allowIconStr: open ? '&#xe7cc;' : '&#xe803;',
      });
    }
    if (placement.startsWith('right')) {
      this.setState({
        allowIconStr: open ? '&#xe803;' : '&#xe7cc;',
      });
    }
  };

  componentDidMount() {
    // 初始化判别方向icon
    this.allowIcon();
  }

  render() {
    const { open, allowIconStr } = this.state;
    const { className, placement, animated, children, ...reset } = this.props;

    // 内容区域的class定义规则
    let contentAnimateClass: string = '';
    if (animated) {
      contentAnimateClass = open ? 'slide-open' : 'slide-close';
    } else {
      contentAnimateClass = open ? 'open' : 'close';
    }

    const DrawerPanelProps = {
      className: classnames(
        'ss-drawer-panel',
        `ss-drawer-panel-${this.placementPadClass().place}`,
        `ss-drawer-panel-${this.placementPadClass().pad}`,
        { 'ss-drawer-panel-hide': !open },
        className,
      ),
      ...reset,
    };

    const DrawerPanelBtnProps = {
      className: classnames(
        'ss-drawer-panel-btn',
        `ss-drawer-panel-btn-${placementObj[placement]}`,
      ),
      onClick: this.toggleContent,
    };
    return (
      <div {...DrawerPanelProps}>
        <div {...DrawerPanelBtnProps}>
          <span className="sumscope-icon" dangerouslySetInnerHTML={{ __html: allowIconStr }} />
        </div>
        <div className={classnames('ss-drawer-panel-content', contentAnimateClass)}>{children}</div>
      </div>
    );
  }
}

export default DrawerPanel;
