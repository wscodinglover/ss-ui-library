import React from 'react';
import {DatePicker} from 'antd'
import classNames from 'classnames';
import moment from 'moment';

const { MonthPicker, WeekPicker } = DatePicker;

// 接口类型
interface DatePickerProps {
  className: string,
  dropdownClassName: string,
  // 选择框类型
  picker: string | undefined,
  suffixIcon: React.ReactNode,
}

// 选择框后缀图标
const SuffixIcon = () => <span className="sumscope-icon ss-suffix-icon">&#xe765;</span>;

// @ts-ignore
class SS_DatePicker extends React.Component<DatePickerProps> {

  pickerChange (date: (moment.Moment | null), dateString: string){
    console.log(date, dateString);
  }

  render() {
    const {className, dropdownClassName, picker, suffixIcon, ...reset} = this.props;
    // eslint-disable-next-line default-case
    switch (picker) {
      case 'date':
        return (
          <DatePicker
            className={classNames(className, "ss-picker")}
            dropdownClassName={classNames(dropdownClassName, "ss-picker-dropdown")}
            suffixIcon={suffixIcon || <SuffixIcon />}
            onChange={this.pickerChange}
            {...reset} />
        );
      case 'week':
        return (
          <WeekPicker
            className={classNames(className, "ss-picker")}
            dropdownClassName={classNames(dropdownClassName, "ss-picker-dropdown")}
            suffixIcon={suffixIcon || <SuffixIcon />}
            {...reset} />
        );
      case 'month':
        return (
          <MonthPicker
            className={classNames(className, "ss-picker")}
            dropdownClassName={classNames(dropdownClassName, "ss-picker-dropdown")}
            suffixIcon={suffixIcon || <SuffixIcon />}
            {...reset} />
        );
    }
  }
}

// default value
SS_DatePicker.defaultProps = {
  picker: 'date',
}
export default SS_DatePicker;
