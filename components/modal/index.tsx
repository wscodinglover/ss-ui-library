import React from 'react';
import {Modal} from 'antd';
import classNames from 'classnames';
import SS_Button from '../button';

function DefaultFooterRender(props: any) {
  const {api} = props;

  function onCancelClick(e: any) {
    // eslint-disable-next-line no-unused-expressions
    api.onCancel && api.onCancel(e)
  }

  function onOkClick(e: any) {
    // eslint-disable-next-line no-unused-expressions
    api.onOk && api.onOk(e)
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
        basic onClick={onOkClick}
        loading={api.confirmLoading}
      >
        {api.okText || '确定'}
      </SS_Button>
    </>
  )
}

function SS_Modal (props: any) {
  const {className, footer, children, ...reset} = props;
  return (
    <Modal
      className={classNames('ss-modal', className)}
      footer={footer || <DefaultFooterRender api={props} />}
      {...reset}
    >
      {children}
    </Modal>
  )
}

export default SS_Modal;
