/**
 * ##################################################################
 * # ModuleName: Modal 模态框
 * # catalog: 反馈组件
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################
 * # Component API新增或修改:
 * # className        自定义class名称          @type{string}       @default[ss-modal]
 * # wrapClassName    自定义modal容器class     @type{boolean}      @default[ss-modal-wrapper]
 * # isMove           是否可移动               @type{boolean}      @default[false]
 * # moveKey          可移动modal的key值       @type{boolean}      @default[]
 * # maskNotUse       是否可穿透使用底层dom    @type{boolean}      @default[false]
 * ##################################################################
 * */

import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import Button from 'ss-ui-library/es/button';
// @ts-ignore
import DragM from 'dragm';
import classnames from 'classnames';

interface SSModalProps extends ModalProps {
  classNmae?: string;
  wrapClassName?: string;
  isMove?: boolean;
  moveKey?: string;
  maskNotUse?: string;
  afterClose?: any;
}

class BuildTitle extends React.PureComponent<SSModalProps, any> {
  private modalDom: React.ReactNode | null;

  constructor(props: any) {
    super(props);
    this.modalDom = null;
  }

  componentDidMount() {
    const { moveKey, isMove, maskNotUse } = this.props;
    const moveKeyClass = `ss-modal-movekey-${moveKey}`;
    const modalDom = document.getElementsByClassName(moveKeyClass);
    if (modalDom && modalDom.length > 1) {
      // eslint-disable-next-line no-throw-literal
      throw 'movekey发生重复添加';
    }
    this.modalDom = modalDom[0];
    if (moveKey && isMove && maskNotUse) {
      this.init();
    }
  }

  init = () => {
    const { width } = this.props;
    const wrapNode = this.modalDom;
    // @ts-ignore
    const modalbody = wrapNode && wrapNode.querySelector('.ant-modal');
    const modalTop = modalbody.offsetTop;
    // @ts-ignore
    this.modalDom.style = `left: 50%; top: ${modalTop}px;right: unset;bottom: unset; width: ${width ||
      520}px; margin-left: ${width ? -width / 2 : -260}px; overflow: hidden`;
    modalbody.style = `top: 0`;
  };

  /**
   * 移动方法回调
   *
   * */
  updateTransform = (transformStr?: string) => {
    if (this.modalDom) {
      // @ts-ignore
      this.modalDom.style.transform = transformStr;
    }
  };

  render() {
    const { title, isMove, moveKey } = this.props;
    return isMove && moveKey && moveKey !== '' ? (
      <DragM updateTransform={this.updateTransform}>
        <div>{title}</div>
      </DragM>
    ) : (
      <div>{title}</div>
    );
  }
}

class SSModal extends React.PureComponent<SSModalProps, any> {
  constructor(props: SSModalProps) {
    super(props);
    this.state = {};
  }

  /**
   * 默认底部内容区域渲染
   * 改写原antd的footer render
   *
   * */
  private defaultFooterRender = () => {
    const { onOk, onCancel, confirmLoading } = this.props;

    return (
      <>
        <Button type="primary" gray onClick={onCancel}>
          取消
        </Button>
        <Button type="primary" basic loading={confirmLoading} onClick={onOk}>
          确定
        </Button>
      </>
    );
  };

  AfterClose = (callback: any, isMove?: boolean, moveKey?: string) => {
    if (isMove) {
      // eslint-disable-next-line no-useless-catch
      try {
        const moveKeyClass = `ss-modal-movekey-${moveKey}`;
        const Node = document.getElementsByClassName(moveKeyClass);
        if (Node[0]) {
          setTimeout(() => {
            // @ts-ignore
            Node[0].style.transform = 'translate(0px, 0px)';
          }, 300);
        }
        if (callback) {
          callback();
        }
      } catch (e) {
        throw e;
      }
    } else if (callback) {
      callback();
    }
  };

  public render() {
    const {
      className,
      wrapClassName,
      footer,
      title,
      isMove,
      moveKey,
      maskNotUse,
      width,
      afterClose,
      children,
      ...reset
    } = this.props;
    const moveKeyClassName =
      isMove && moveKey && moveKey !== '' ? `ss-modal-movekey-${moveKey}` : '';
    const TitleParams = {
      title,
      isMove,
      moveKey,
      maskNotUse,
      width,
    };
    const ModalParams = {
      className: classnames('ss-modal', className),
      wrapClassName: classnames('ss-modal-wrapper', moveKeyClassName, wrapClassName),
      footer: footer || this.defaultFooterRender(),
      title: <BuildTitle {...TitleParams} />,
      destroyOnClose: true,
      afterClose: this.AfterClose(afterClose, isMove, moveKey),
      ...reset,
    };
    return (
      // @ts-ignore
      <Modal {...ModalParams}>{children}</Modal>
    );
  }
}

export default SSModal;
