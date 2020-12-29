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
 * # maskNotUse       是否可穿透使用底层dom     @type{boolean}      @default[false]
 * # limit            是否限制不能移出屏幕      @type{boolean}      @default[false]
 * ##################################################################
 * */

import React from 'react';
import AntModal, { ModalProps } from 'antd/lib/modal';
import Button from 'ss-ui-library/es/button';
import 'antd/es/modal/style/index.css';
import classnames from 'classnames';

interface SSModalProps extends ModalProps {
  classNmae?: string;
  wrapClassName?: string;
  isMove?: boolean;
  moveKey?: string;
  maskNotUse?: string;
  afterClose?: any;
  limit: boolean;
}

class SSModal extends React.PureComponent<SSModalProps, any> {
  private simpleClass: string;

  private init: boolean;

  private contain: any;

  private header: any;

  constructor(props: SSModalProps) {
    super(props);
    this.simpleClass = Math.random()
      .toString(36)
      .substring(2);
    this.init = false;
    this.contain = null;
    this.header = null;
  }

  componentDidMount() {
    this.create();
  }

  componentWillUnmount() {
    this.removeMove();
    window.removeEventListener('mouseup', this.removeUp, false);
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

  move = (event: any) => {
    console.log(123123123);
    const { top, left, right, bottom, width, height } = this.contain.getBoundingClientRect();
    const { limit } = this.props;
    this.contain.style.top = `${top + event.movementY}px`;
    this.contain.style.left = `${left + event.movementX}px`;
    if (limit) {
      if (bottom + event.movementY > window.innerHeight)
        this.contain.style.top = `${window.innerHeight - height}px`;
      if (top + event.movementY < 0) this.contain.style.top = 0;
      if (right + event.movementX > window.innerWidth)
        this.contain.style.left = `${window.innerWidth - width}px`;
      if (left + event.movementX < 0) this.contain.style.left = 0;
    }
  };

  removeMove = () => {
    window.removeEventListener('mousemove', this.move, false);
  };

  removeUp = () => {
    document.body.onselectstart = () => true;
    this.removeMove();
  };

  create = () => {
    if (this.init) return false;
    const { title, isMove, visible } = this.props;
    if (title && isMove && visible) {
      this.init = true;
      setTimeout(() => {
        const node = document.getElementsByClassName(this.simpleClass)[0];
        this.contain = node.getElementsByClassName('ant-modal')[0];
        this.contain.style.paddingBottom = 0;
        this.contain.style.display = 'inline-block';
        this.header = this.contain.getElementsByClassName('ant-modal-header')[0];
        this.header.style.cursor = 'all-scroll';
        this.header.onmousedown = () => {
          document.body.onselectstart = () => false;
          window.addEventListener('mousemove', this.move, false);
        };
        window.addEventListener('mouseup', this.removeUp, false);
      }, 0);
    }
  };

  render() {
    const {
      className,
      wrapClassName,
      maskNotUse,
      footer,
      isMove,
      moveKey,
      children,
      ...reset
    } = this.props;
    const moveKeyClassName =
      isMove && moveKey && moveKey !== '' ? `ss-modal-movekey-${moveKey}` : '';
    let Footer: any = footer || this.defaultFooterRender();
    if (footer === null) {
      Footer = null;
    }
    const wrapModalClassName = wrapClassName
      ? `${wrapClassName} ${this.simpleClass}`
      : `${this.simpleClass}`;
    const ModalParams = {
      className: classnames('ss-modal', className),
      wrapClassName: classnames(
        'ss-modal-wrapper',
        { 'ss-modal-wrapper-mask-notuse': maskNotUse },
        moveKeyClassName,
        wrapModalClassName,
      ),
      // eslint-disable-next-line no-nested-ternary
      footer: Footer,
      ...reset,
    };
    return (
      // @ts-ignore
      <AntModal {...ModalParams}>{children}</AntModal>
    );
  }
}

export default SSModal;
