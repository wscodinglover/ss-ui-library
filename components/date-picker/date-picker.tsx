import React from 'react';
import { DatePicker } from 'antd';
import { DatePickerDecorator } from 'antd/lib/date-picker/interface';
import classnames from 'classnames';
import moment from 'moment';
import SSIcon from 'ss-ui-library/es/icon';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const AntMonthPicker = DatePicker.MonthPicker;
const AntWeekPicker = DatePicker.WeekPicker;
const AntRangePicker = DatePicker.RangePicker;

interface SSDatePickerProps extends DatePickerDecorator {
  className?: string;
  dropdownClassName?: string;
  picker?: string | undefined;
  suffixIcon?: React.ReactNode;
  disabled?: boolean;
  allowClear?: boolean;
  value?: any;
  onChange?: any;
  defaultValue?: any;
}

class SSDatePicker extends React.PureComponent<SSDatePickerProps, any> {
  static MonthPicker: React.ComponentProps<any>;

  static WeekPicker: React.ComponentProps<any>;

  static RangePicker: React.ComponentProps<any>;

  constructor(props: SSDatePickerProps) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      value: defaultValue,
    };
  }

  /**
   * 日期选择框时间发生变化回调
   *
   * */
  datePickerChange = (date: any, dateString: string | [string, string]) => {
    const { onChange } = this.props;
    // 更新state
    this.setState(
      {
        value: date,
      },
      () => {
        if (onChange) {
          onChange(date, dateString);
        }
      },
    );
  };

  /**
   * 清空日期选择框的时间
   *
   * */
  clearPickerDate = (e: any) => {
    e.stopPropagation();
    this.datePickerChange(null, '');
  };

  /**
   * 自定义clearIcon 和 suffixIcon
   *
   * */
  private iconRender = () => {
    const { value } = this.state;
    const { suffixIcon, disabled = false, allowClear = true } = this.props;
    const isClear = Boolean(!disabled && allowClear && value);
    const clearIconClassName = isClear ? 'show' : 'hidden';
    const clearIconProps = {
      className: classnames('ss-icon-clear', clearIconClassName),
    };
    return (
      <div>
        {suffixIcon || (
          <SSIcon className={`ss-icon-caledar ${isClear ? 'hidden' : 'show'}`} value="&#xe765;" />
        )}
        <div {...clearIconProps} onClick={this.clearPickerDate}>
          <SSIcon value="&#xe777;" />
        </div>
      </div>
    );
  };

  /**
   * 根据picker类型判断渲染的节点
   *
   * */
  private pickerRender = () => {
    const { value } = this.state;
    const { className, dropdownClassName, picker = 'date', ...reset } = this.props;
    const shareParams = {
      picker,
      className: classnames(
        'ss-calendar-picker',
        className && className.replace('ss-calendar-picker', ''),
      ),
      dropdownClassName: classnames(
        'ss-calendar-picker-container',
        dropdownClassName && dropdownClassName.replace('ss-calendar-picker-container', ''),
      ),
      suffixIcon: this.iconRender(),
    };
    // 日期选择框params
    const datePickerParams = {
      ...reset,
      value: value ? moment(value, 'YYYY-MM-DD') : null,
      onChange: this.datePickerChange,
    };
    // 月份日期选择框params
    const monthPickerParams = {
      ...reset,
      value: value ? moment(value, 'YYYY-MM') : null,
      onChange: this.datePickerChange,
    };
    // 星期日期选择框params
    const weekPickerParams = {
      ...reset,
      value: value ? moment(value, 'YYYY-wo') : null,
      onChange: this.datePickerChange,
    };
    // 区间日期选择框params
    const rangePickerParams = {
      ...reset,
      value:
        value && value.length
          ? value.map((item: any) => moment(item, 'YYYY-MM-DD HH:mm:ss'))
          : null,
      onChange: this.datePickerChange,
    };
    let reactNode: React.ComponentProps<any>;
    switch (picker) {
      case 'date':
        reactNode = <DatePicker {...shareParams} {...datePickerParams} />;
        break;
      case 'month':
        reactNode = <AntMonthPicker {...shareParams} {...monthPickerParams} />;
        break;
      case 'week':
        reactNode = <AntWeekPicker {...shareParams} {...weekPickerParams} />;
        break;
      case 'range':
        reactNode = <AntRangePicker {...shareParams} {...rangePickerParams} />;
        break;
      default:
        reactNode = <DatePicker {...shareParams} {...datePickerParams} />;
        break;
    }
    return reactNode;
  };

  render() {
    return <>{this.pickerRender()}</>;
  }
}

export default SSDatePicker;
