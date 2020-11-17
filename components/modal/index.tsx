import React from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
// @ts-ignore
import DragM from 'dragm';
import SS_Button from '../button';

function DefaultFooterRender(props: any) {
  const { api } = props;

  function onCancelClick(e: any) {
    // eslint-disable-next-line no-unused-expressions
    api.onCancel && api.onCancel(e);
  }

  function onOkClick(e: any) {
    // eslint-disable-next-line no-unused-expressions
    api.onOk && api.onOk(e);
  }

  return (
    <>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SS_Button
        // @ts-ignore
        type="primary"
        gray
        onClick={onCancelClick}
      >
        {api.cancelText || '取消'}
      </SS_Button>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SS_Button
        // @ts-ignore
        type="primary"
        basic
        onClick={onOkClick}
        loading={api.confirmLoading}
      >
        {api.okText || '确定'}
      </SS_Button>
    </>
  );
}

type ModalInterface = {
  visible?: boolean;
  className?: string;
  wrapClassName?: string;
  title?: string | React.ReactNode;
  footer?: React.ReactNode | null;
  afterClose: any;
  isMove: boolean;
  moveKey?: string;
};

class BuildTitle extends React.PureComponent<any> {
  public modalDom: React.ReactNode;

  constructor(props: any) {
    super(props);
    this.modalDom = null;
  }

  updateTransform = (transformStr?: number | string) => {
    // @ts-ignore
    this.modalDom.style.transform = transformStr;
  };

  componentDidMount() {
    const { moveKey } = this.props;
    const moveKeyClass = `ss-modal-movekey-${moveKey}`;
    const modalDom = document.getElementsByClassName(
      moveKeyClass, // modal的class是ant-modal
    );
    if (modalDom.length > 1) {
      // eslint-disable-next-line no-throw-literal
      throw 'moveke发生重复添加';
    }
    this.modalDom = modalDom[0];
  }

  render() {
    const { title, isMove } = this.props;
    return isMove ? (
      // @ts-ignore
      <DragM updateTransform={this.updateTransform}>
        <div>{title}</div>
      </DragM>
    ) : (
      <div>{title}</div>
    );
  }
}

class SS_Modal extends React.PureComponent<ModalInterface> {
  /**
   * Modal 完全关闭后的回调
   *
   * */
  AfterClose = (callback: any, moveKey?: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const moveKeyClass = `ss-modal-movekey-${moveKey}`;
      const Node = document.getElementsByClassName(moveKeyClass);
      if (Node[0]) {
        // @ts-ignore
        setTimeout(() => {
          // @ts-ignore
          Node[0].style.transform = 'translate(0px, 0px)';
          // @ts-ignore
        }, 300);
      }
      if (callback) {
        callback();
      }
    } catch (e) {
      throw e;
    }
  };

  render() {
    const {
      className,
      wrapClassName,
      isMove,
      title,
      footer,
      afterClose,
      moveKey,
      children,
      ...reset
    } = this.props;
    const TitleProps = {
      title: title || 'Basic Modal',
      isMove: isMove || false,
      moveKey,
    };
    const Title = <BuildTitle {...TitleProps} />;
    const moveKeyClass = moveKey && `ss-modal-movekey-${moveKey}`;
    const ModalProps = {
      className: classNames('ss-modal', className),
      wrapClassName: classNames(moveKeyClass, wrapClassName),
      title: Title,
      footer: footer || <DefaultFooterRender api={this.props} />,
      afterClose: this.AfterClose(afterClose, moveKey),
      destroyOnClose: true,
      ...reset,
    };
    return (
      // @ts-ignore
      <Modal {...ModalProps}>{children}</Modal>
    );
  }
}

export default SS_Modal;
