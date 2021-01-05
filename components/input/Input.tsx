import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import classnames from 'classnames';
import SSIcon from '../icon';

const { Password, TextArea, Search } = Input;

class SSInput extends React.PureComponent<InputProps, any> {
  static Password: any;

  static TextArea: any;

  static Search: any;

  constructor(props: InputProps) {
    super(props);
    const { defaultValue, value } = this.props;
    this.state = {
      value: value || defaultValue || '',
    };
  }

  /**
   * 点击清除按钮，清空内容
   *
   * */
  clearVal = () => {
    this.setState(
      {
        value: '',
      },
      () => {
        this.inputChange(null);
      },
    );
  };

  /**
   * 自定义前缀图标
   *
   * */
  prefixRender = () => {
    const { prefix } = this.props;
    return typeof prefix === 'string' ? <SSIcon value={prefix} /> : prefix;
  };

  /**
   * 自定义后缀图标 + clear icon
   *
   * */
  suffixRender = () => {
    const { value } = this.state;
    const { suffix, allowClear } = this.props;
    const customSuffix = typeof suffix === 'string' ? <SSIcon value={suffix} /> : suffix;
    const clearIcon = allowClear && value && value !== '' && (
      <div className="ss-input-clear-icon" onClick={this.clearVal}>
        <SSIcon value="&#xe777;" />
      </div>
    );
    return (
      <>
        {clearIcon}
        {customSuffix}
      </>
    );
  };

  /**
   * 输入框内容变化时的回调
   *
   * */
  inputChange = (e: any) => {
    const value = e && e.target ? e.target.value : '';
    const { onChange } = this.props;
    // 更新state
    this.setState(
      {
        value,
      },
      () => {
        if (onChange) {
          onChange(value);
        }
      },
    );
  };

  render() {
    const { value } = this.state;
    const { className, ...reset } = this.props;
    const InputParams = {
      className: classnames('ss-input', className),
      ...reset,
      value,
      prefix: this.prefixRender(),
      suffix: this.suffixRender(),
      onChange: this.inputChange,
    };
    return <Input {...InputParams} />;
  }
}

SSInput.Password = Password;
SSInput.TextArea = TextArea;
SSInput.Search = Search;

export default SSInput;
