import React from 'react';
import AntDatePicker from 'antd/lib/date-picker';
import { MonthPickerProps } from 'antd/es/date-picker/interface';
import classnames from 'classnames';
import moment from 'moment';
import SSIcon from 'ss-ui-library/es/icon';

const MonthPicker = AntDatePicker.MonthPicker;

class SSMonthPicker extends React.PureComponent<MonthPickerProps, any> {
  constructor(props: MonthPickerProps) {
    super(props);
    this.state = {
      value: null,
    };
  }

  /**
   * 日期选择框时间发生变化回调
   *
   * */
  datePickerChange = (date: any, dateString: string) => {
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
  clearPicker = (e: any) => {
    e.stopPropagation();
    this.datePickerChange(null, '');
  };

  /**
   * 自定义clearIcon 和 suffixIcon
   *
   * */
  private iconRender = (suffixIcon?: React.ReactNode | undefined): JSX.Element => {
    const { value } = this.state;
    const { disabled = false, allowClear = true } = this.props;
    const isClear = !disabled && allowClear && value;
    const clearIconClassName = isClear ? 'show' : 'hidden';
    const clearIconProps = {
      className: classnames('ss-icon-clear', clearIconClassName),
      onClick: this.clearPicker,
    };
    return (
      <div>
        {suffixIcon || (
          <SSIcon className={`ss-icon-caledar ${isClear ? 'hidden' : 'show'}`} value="&#xe765;" />
        )}
        <div {...clearIconProps}>
          <SSIcon value="&#xe777;" />
        </div>
      </div>
    );
  };

  render() {
    const { className, dropdownClassName, suffixIcon, ...reset } = this.props;
    const { value } = this.state;
    const MonthPickerParams = {
      className: classnames('ss-calendar-picker', className !== 'ss-calendar-picker' && className),
      dropdownClassName: classnames(
        'ss-calendar-picker-container',
        dropdownClassName && dropdownClassName.replace('ss-calendar-picker-container', ''),
      ),
      suffixIcon: this.iconRender(suffixIcon),
      ...reset,
      value: value ? moment(value, 'YYYY-MM') : null,
      onChange: this.datePickerChange,
    };
    return <MonthPicker {...MonthPickerParams} />;
  }
}

export default SSMonthPicker;
