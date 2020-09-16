import React, { Component, createRef } from 'react';
import {DatePicker} from 'antd'
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

interface DatePickerProps {
  className: string,
  dropdownClassName: string,
  picker: string | undefined,
  disabled: boolean,
  defaultValue: any
}

// eslint-disable-next-line react/prefer-stateless-function
export default class SS_DatePicker extends Component<DatePickerProps, any> {
  pickerRef = createRef();

  static defaultProps = {
    picker: 'date',
  }

  state = {
    showClearIcon: false,
    value: this.props.defaultValue,
  }

  // 鼠标移入，如果有值且不禁用，显示clear icon
  showClearIcon () {
    if (this.state.value && !this.props.disabled) {
      this.setState({
        showClearIcon: true,
      })
    }
  }

  // 鼠标移出，因此clear icon
  hideClearIcon () {
    this.setState({
      showClearIcon: false,
    })
  }

  // 清空选择的日期
  clearPickerValue () {
    // @ts-ignore
    this.pickerRef.current.picker.input.value = null
    // @ts-ignore
    this.pickerRef.current.picker.handleChange()
    this.setState({
      value: undefined,
    })
  }

  // 日期值发生改变
  onChangePickerVal (date: any, dateString: string) {
    this.setState({
      value: date,
    }, () => {
      // @ts-ignore
      this.props.onChange(date, dateString)
    })
  }

  // common常规
  private renderCommonView() : JSX.Element {
    const {className, picker, ...reset} = this.props;
    // 常规
    let DateComponents: any;
    switch (picker) {
      case 'week':
        DateComponents = WeekPicker;
        break;
      case 'month':
        DateComponents = MonthPicker;
        break;
      case 'range':
        DateComponents = RangePicker;
        break;
      case 'date':
        DateComponents = DatePicker;
        break;
      default:
        DateComponents = DatePicker;
        break;
    }

    return (
      <DateComponents
        ref={this.pickerRef}
        className={classNames('ss-date-picker', className)}
        dropdownClassName={classNames('ss-date-picker-dropdown', className)}
        suffixIcon={<span className={classNames("sumscope-icon ss-calendar-icon", {'show': !this.state.showClearIcon})}>&#xe765;</span>}
        value={this.state.value}
        {...reset}
        onChange={this.onChangePickerVal.bind(this)}
      />
    )
  };

  public render() {
    return (
      <div
        className="ss-date-picker-wrap"
        onMouseEnter={this.showClearIcon.bind(this)}
        onMouseLeave={this.hideClearIcon.bind(this)}
      >
        {this.renderCommonView()}
        <div
          className={classNames("ss-clear-icon", {'show': this.state.showClearIcon})}
          onMouseEnter={this.showClearIcon.bind(this)}
          onClick={this.clearPickerValue.bind(this)}
        >
          <span className="sumscope-icon">&#xe777;</span>
        </div>
      </div>
    )
  }
}
