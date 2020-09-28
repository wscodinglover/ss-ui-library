import React from 'react';
import {Calendar} from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/zh-cn';
import sloarToLunar from '../_utils/sloarToLunar';

moment.locale('zh-cn');

function SS_Calendar (props: any) {
  const {className, isLunar, lunarFormat, dateCellRender, dateFullCellRender, ...reset} = props;

  // 是否是今天
  const isToday = (sy: any, sm: any, sd: any) => {
    const Now = new Date()
    return Boolean(Now.getFullYear() === Number(sy) && Now.getMonth() + 1 === Number(sm) && Now.getDate() === Number(sd))
  }

  // 日历显示覆盖方法
  // eslint-disable-next-line no-shadow
  const DateFullCellRender = (moment: any) => {
    const sy = moment.format('YYYY')
    const sm = moment.format('MM')
    const sd = moment.format('DD')
    const {lunarDay, lunarMonth, lunarYear} = (sloarToLunar(sy, sm, sd))
    const _lunarFormat = lunarFormat || 'DD'
    return (
      <div  className="ss-calendar-date">
        <div className="ss-calendar-value">
          <span className="sloar">{sd}</span>
          {isLunar && <span className="lunar">{_lunarFormat.replace('YYYY', lunarYear).replace('MM', lunarMonth).replace('DD', lunarDay)}</span>}
        </div>
        <div className="tags-spec">
          {isToday(sy, sm, sd) && <span className="tags-today">今</span>}
        </div>
        <div className="ss-calendar-content">
          {dateCellRender && dateCellRender(moment)}
        </div>
      </div>
    )
  }

  return (
    <Calendar
      className={classNames('ss-calendar', className)}
      dateFullCellRender={dateFullCellRender || DateFullCellRender}
      {...reset}
    />
  )
}

export default SS_Calendar;
