/**
 * ##################################################################################
 * # ModuleName: Calendar 日历
 * # catalog: 数据展示
 * # updateTime: 2020-12-11
 * # auth: Davis
 * #################################################################################
 * # Component API新增或修改:
 * # className      自定义class名称     @type{string}      @default[ss-fullcalendar]
 * # valueFormate   公历日期格式        @type{boolean}     @default[DD]
 * # hideHeader     是否隐藏头部        @type{boolean}     @default[false]
 * # isLunar        是否显示农历日期     @type{boolean}     @default[false]
 * # lunarFormat    农历日期格式        @type{string}      @default[DD]
 * ##################################################################################
 * */

import React from 'react';
import { Calendar } from 'antd';
import { CalendarProps } from 'antd/lib/calendar';
import classnames from 'classnames';
import moment from 'moment';
import sloarToLunar from '../_utils/sloarToLunar';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
moment.weekdaysShort('zh-cn');

interface SSCalendarProps extends CalendarProps {
  valueFormate?: string;
  hideHeader?: boolean;
  isLunar?: boolean;
  lunarFormat?: string;
  dateCellRender: any;
}

class SSCalendar extends React.PureComponent<SSCalendarProps, any> {
  /**
   * 自定义渲染日期单元格
   *
   * */
  customDateCellRender = (value: any) => {
    const { valueFormate = 'DD', dateCellRender, isLunar, lunarFormat = 'DD' } = this.props;
    let customCell = null;
    let lunarCell = null;
    if (dateCellRender) {
      customCell = dateCellRender(value);
    }
    if (isLunar) {
      const sy = moment(value).format('YYYY');
      const sm = moment(value).format('MM');
      const sd = moment(value).format('DD');
      const { lunarDay, lunarMonth, lunarYear } = sloarToLunar(sy, sm, sd);
      lunarCell = (
        <span className="lunar ant-fullcalendar-item-value-lunar">
          {lunarFormat
            .replace('YYYY', lunarYear)
            .replace('MM', lunarMonth)
            .replace('DD', lunarDay)}
        </span>
      );
    }
    return (
      <div className="ss-fullcalendar-item">
        <div className="ant-fullcalendar-item-value">
          <span className="ant-fullcalendar-item-value-solar">
            {moment(value).format(valueFormate)}
          </span>
          {lunarCell}
        </div>
        <div className="ant-fullcalendar-item-content">{customCell}</div>
      </div>
    );
  };

  render() {
    const { className, hideHeader, ...reset } = this.props;
    const CalendarParams = {
      className: classnames(
        'ss-fullcalendar',
        { 'ss-fullcalendar-header-hidden': hideHeader },
        className,
      ),
      ...reset,
      dateCellRender: this.customDateCellRender,
    };
    return <Calendar {...CalendarParams} />;
  }
}

export default SSCalendar;
