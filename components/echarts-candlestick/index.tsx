import React from 'react';
import ReactChart from 'echarts-for-react';
import config from '../_utils/chartConfig/candlestick/config';

/*
 * 处理主轴data, X轴和Y轴的data不能相互存在
 * */
const handelAxisData = (x: any, y: any) => {
  if (y.data && y.data.length) {
    delete x.data;
  }
};

/*
 * 处理图例的显示位置
 * */
const handleLegendPosition = (result: any) => {
  // 横向排列
  if (result.yAxis.data && result.yAxis.data.length) {
    result.legend.top = 6;
  }
};

/*
 * 处理chart不同类型的逻辑
 * @params {* object} option 传递过来的自定义的option
 * @return object 合并后创建的新的option对象
 * */
const handleBarChart = (result: any) => {
  // 返回出去
  const _result = JSON.parse(result);

  // 处理主轴data, X轴和Y轴的data不能相互存在
  if (Array.isArray(_result.xAxis)) {
    _result.xAxis.forEach((item: any) => {
      handelAxisData(item.xAxis, item.yAxis);
    });
  }
  handelAxisData(_result.xAxis, _result.yAxis);

  // 处理图例的显示位置
  handleLegendPosition(_result);

  return _result;
};

/*
 * 合并defaultOption和option
 * @params {* object} option 传递过来的自定义的option
 * @return object 合并后创建的新的option对象
 * */
const assignOption = (option: any) => {
  // 深拷贝
  const _config = JSON.parse(JSON.stringify(config));
  Object.keys(_config).forEach(item => {
    if (Array.isArray(_config[item])) {
      _config[item].forEach((cap: any, cIndex: number) => {
        if (Array.isArray(option[item])) {
          option[item].forEach((pap: any, pIndex: number) => {
            _config[item][pIndex] = { ...cap, ...pap };
          });
        } else if (typeof cap === 'string') {
          if (option[item] && option[item].length) {
            _config[item] = option[item];
          }
        } else {
          _config[item][cIndex] = { ...cap, ...option[item] };
        }
      });
    } else {
      _config[item] = { ..._config[item], ...option[item] };
    }
  });

  // 深拷贝，防止数据相互影响
  // eslint-disable-next-line no-use-before-define
  return handleBarChart(JSON.stringify(_config));
};

function SS_Scatter_Chart(props: any) {
  const { option, ...reset } = props;

  /*
   * 合并defaultOption和option
   * @params {* object} option 传递过来的自定义的option
   * @return object 合并后创建的新的option对象
   * */
  const _option = assignOption(option);
  console.log(_option);
  return <ReactChart option={_option} {...reset} />;
}

export default SS_Scatter_Chart;
