/*
 * @Author Davis.qi
 * @Date 2020/9/11
 * */
import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';

type InputProps = {
  className: string;
  allowClear: boolean;
  defaultValue: any;
  onChange: any;
  suffix: React.ReactNode | undefined;
};

type SuffixIconProps = {
  className: string;
  parent: any;
};

// clear icon
function SuffixIcon(props: SuffixIconProps) {
  // 点击清除按钮，清除内容
  const clearValue = () => {
    props.parent.refs.inputRef.setState({
      value: '',
    });
    props.parent.setState({
      clearIconShow: false,
    });
    const { onChange } = props.parent.props;
    if (onChange) {
      props.parent.props.onChange('');
    }
  };
  return (
    <div className={classNames('ss-clear-icon', props.className)} onClick={clearValue.bind(this)}>
      <span className="sumscope-icon">&#xe777;</span>
    </div>
  );
}

class SS_Input extends React.Component<InputProps> {
  // 类型检测
  static propTypes = {
    // class
    className: PropTypes.string,
  };

  state = {
    // 清除图标是否显示
    clearIconShow: false,
  };

  // 输入流输入
  OnChange(e: any) {
    const { value } = e.target;
    // 无输入内容时，clearIcon不显示，反之显示
    this.setState(
      {
        clearIconShow: value !== '',
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(value);
        }
      },
    );
  }

  componentDidMount() {
    // 无默认内容时，clearIcon不显示，反之显示
    this.setState({
      clearIconShow: this.props.defaultValue && this.props.defaultValue !== '',
    });
  }

  render() {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, allowClear, suffix, onChange, ...reset } = this.props;
    // @ts-ignore
    return (
      <Input
        ref="inputRef"
        className={classNames(className, 'ss-input')}
        // @ts-ignore
        suffix={
          allowClear ? (
            // @ts-ignore
            <SuffixIcon className={{ show: this.state.clearIconShow }} parent={this} />
          ) : (
            suffix
          )
        }
        onChange={this.OnChange.bind(this)}
        {...reset}
      />
    );
  }
}

export default SS_Input;
