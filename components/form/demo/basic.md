---
order: 0
title:
  zh-CN: 内联登录栏
  en-US: 内联登录栏
---

## zh-CN

内联登录栏，常用在顶部导航栏中。

## en-US

内联登录栏，常用在顶部导航栏中。

```jsx
import { Form, Icon, Input, Button } from 'ss-ui-library';

const {Password, TextArea} = Input;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

      // Only show error after a field is touched.
      const usernameError = isFieldTouched('username') && getFieldError('username');
      const passwordError = isFieldTouched('password') && getFieldError('password');
      return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon value="&#xe827;" />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Password
                  prefix={<Icon value="&#xe82a;" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('notice', {
                rules: [{ required: true, message: 'Please input your notice!' }],
              })(
                <TextArea
                  placeholder="notice"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                basic
                disabled={hasErrors(getFieldsError())}
              >
                login
              </Button>
            </Form.Item>
        </Form>
      )
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

ReactDOM.render(<div className="example"><WrappedHorizontalLoginForm /></div>, mountNode);
```
```css
.example {
    padding: 20px;
    background: #1e1e1e;
}
```
