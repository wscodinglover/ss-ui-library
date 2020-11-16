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
    this.modalDom = document.getElementsByClassName(
      'ant-modal-wrap', // modal的class是ant-modal
    )[0];
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
  AfterClose = (callback: any) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const Node = document.getElementsByClassName('ant-modal-wrap');
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
      children,
      ...reset
    } = this.props;
    const Title = <BuildTitle title={title || 'Basic Modal'} isMove={isMove || false} />;
    const ModalProps = {
      className: classNames('ss-modal', className),
      wrapClassName,
      title: Title,
      footer: footer || <DefaultFooterRender api={this} />,
      afterClose: this.AfterClose(afterClose),
      destroyOnClose: true,
      ...reset,
    };
    // @ts-ignore
    return <Modal {...ModalProps}>{children}</Modal>;
  }
}

export default SS_Modal;
