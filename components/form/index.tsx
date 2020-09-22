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

// eslint-disable-next-line react/prefer-stateless-function
class SS_Form extends React.Component<FormProps, any> {
  static create: any

  static Item: any

  render() {
    const {className, children, ...reset} = this.props;
    return (
      <Form
        className={classNames('ss-form', className)}
        {...reset}
      >
        {children}
      </Form>
    )
  }
}

// help dom
function Help (props: any) {
  let error: any
  if (props.field && props.field.errors && props.field.errors.length) {
    error = props.field.errors[props.field.errors.length - 1].message;
  }
  return (
    <div className="ss-form-help">
      {error && <span className="sumscope-icon">&#xe841;</span>}
      <span>{error}</span>
    </div>
  )
}

// eslint-disable-next-line react/prefer-stateless-function
class SS_Form_Item extends React.Component<FormItemProps, any> {
  render() {
    const {className, children, help, ...reset} = this.props;

    // 指明field name
    // @ts-ignore
    const field = this.props.children && this.props.children.props && this.props.children.props["data-__field"] ? this.props.children.props["data-__field"] : undefined

    return (
      <Form.Item
        help={help || <Help field={field} />}
        className={classNames('ss-form', className)}
        {...reset}
      >
        {children}
      </Form.Item>
    )
  }
}

// function SS_Form_Item (props: FormItemProps) {
//   const {className, help, children, ...reset} = props;
//
//   // help dom
//   const Help = () => <div>2312312</div>
//
//   return (
//     <Form.Item
//       help={help || <Help />}
//       className={classNames('ss-form', className)}
//       {...reset}
//     >
//       {children}
//     </Form.Item>
//   )
// }

// Form create fn
SS_Form.create = Form.create
SS_Form.Item = SS_Form_Item;


export default SS_Form;
