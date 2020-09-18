import React from 'react';
import {Form} from 'antd';
import classNames from 'classnames';

interface FormProps {
  className: string,
  children: React.ReactNode
}

interface FormItemProps {
  className: string,
  help: string | React.ReactNode,
  children: React.ReactNode
}

function SS_Form (props: FormProps) {
  const {className, children, ...reset} = props;
  return (
    <Form
      className={classNames('ss-form', className)}
      {...reset}
    >
      {children}
    </Form>
  )
}


function SS_Form_Item (props: FormItemProps) {
  const {className, help, children, ...reset} = props;

  // help dom
  const Help = () => <div>2312312</div>

  return (
    <Form.Item
      help={help || <Help />}
      className={classNames('ss-form', className)}
      {...reset}
    >
      {children}
    </Form.Item>
  )
}

SS_Form.create = Form.create;
// 提示信息

SS_Form.Item = SS_Form_Item;

export default SS_Form;
