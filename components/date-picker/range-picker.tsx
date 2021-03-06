import React from 'react';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker/interface';
import classnames from 'classnames';
import moment from 'moment';
import SSIcon from 'ss-ui-library/es/icon';

const RangePicker = DatePicker.RangePicker;

class SSRangePicker extends React.PureComponent<RangePickerProps, any> {
  constructor(props: RangePickerProps) {
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
  datePickerChange = (date: any, dateString: any) => {
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
    const RangePickerParams = {
      className: classnames('ss-calendar-picker', className !== 'ss-calendar-picker' && className),
      dropdownClassName: classnames(
        'ss-calendar-picker-container',
        dropdownClassName && dropdownClassName.replace('ss-calendar-picker-container', ''),
      ),
      suffixIcon: this.iconRender(suffixIcon),
      ...reset,
      value:
        value && value.length
          ? value.map((item: any) => moment(item, 'YYYY-MM-DD HH:mm:ss'))
          : null,
      onChange: this.datePickerChange,
    };

    return <RangePicker {...RangePickerParams} />;
  }
}

export default SSRangePicker;
