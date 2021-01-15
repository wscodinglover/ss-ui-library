import React from 'react';
import classnames from 'classnames';

interface SSIframeModalProps {
  id?: string;
  visible?: boolean;
  mask?: boolean;
  wrapVisible?: boolean;
}

class SSIframeModal extends React.PureComponent<SSIframeModalProps, any> {
  static defaultProps = {
    visible: false,
    mask: true,
    wrapVisible: true,
  };

  componentDidMount() {
    this.getZindex();
  }

  getZindex = () => {
    // const wrap = ReactDOM.findDOMNode(this)
    // return wrap.style.zIndex
  };

  render() {
    const { id, visible, mask, wrapVisible } = this.props;
    const WrapParams = {
      className: classnames(
        'ss-modal-iframe-wrap',
        { 'ss-modal-iframe-wrap-auto': !wrapVisible },
        { show: visible },
      ),
    };
    const MaskParams = {
      className: classnames('ss-modal-iframe-mask', { show: visible }),
    };
    const ModalParams = {
      className: classnames('ss-modal-iframe', { show: visible }),
      id,
    };
    return (
      <div {...WrapParams}>
        {/* 遮罩 */}
        {mask && <div {...MaskParams} />}
        {/* 弹框内容 */}
        <div {...ModalParams}>
          <span>test iframe modal</span>
        </div>
      </div>
    );
  }
}

export default SSIframeModal;
