/**
 * defaultOption配置，UI设计需求默认外观
 * @type {Object}
 */
export default {
  color: ['#7822B0', '#0060FF', '#00A74F', '#23BC78', '#FF5B00'],
  title: {
    text: '',
    textStyle: {
      color: '#FFEBC8',
      fontSize: 14,
    },
    left: '10%',
  },
  legend: {
    bottom: 0,
    itemWidth: 10,
    itemHeight: 10,
    inactiveColor: '#8F9598',
    textStyle: {
      color: '#FFEBC8',
    },
  },
  tooltip: {
    backgroundColor: '#193D37',
    borderColor: '#308376',
    borderWidth: 1,
    textStyle: {
      color: '#FFEBC8',
      fontSize: 12,
    },
    extraCssText: 'box-shadow:  0 0 4px 0 rgba(0,0,0,0.50);border-radius: 2px;',
  },
  // 极坐标系的角度轴
  angleAxis: {
    min(value: any): number {
      return value.min >= 1 ? value.min - value.max / 3 : 0;
    },
    max(value: any): number {
      return (value.max * 4) / 3;
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  // 极坐标系的径向轴
  radiusAxis: {
    z: 100,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      margin: 6,
      fontSize: 10,
      textStyle: {
        color: '#FFEBC8',
      },
      interval: 0,
    },
  },
  polar: {
    center: ['50%', '50%'],
  },
  series: [
    {
      type: 'bar',
      coordinateSystem: 'polar',
      barWidth: 10,
    },
  ],
};
