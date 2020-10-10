/**
 * defaultOption配置，UI设计需求默认外观
 * @type {Object}
 */
export default {
  title: {
    text: '',
    textStyle: {
      color: '#FFEBC8',
      fontSize: 14,
    },
    left: 'center',
  },
  legend: {
    show: true,
    // 垂直显示
    orient: 'vertical',
    // 延Y轴居中
    y: 'center',
    // 居右显示
    x: '70%',
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
  grid: {
    top: 30,
  },
  radar: {
    name: {
      textStyle: {
        color: '#8F9598',
      },
    },
    textStyle: {
      color: '#8F9598',
    },
    nameGap: 4,
    shape: 'polygon',
    axisLine: {
      lineStyle: {
        color: ['#193D37'],
      },
    },
    axisLabel: {
      color: '#8F9598',
    },
    splitLine: {
      lineStyle: {
        color: '#193D37',
      },
    },
    splitArea: {
      areaStyle: {
        color: ['#172422', '#121A19'],
      },
    },
  },
  series: [
    {
      type: 'radar',
      symbolSize: 6,
      itemStyle: {
        color: '#00A74F',
        borderWidth: 2,
        borderColor: '#121A19',
      },
      lineStyle: {
        color: '#00A74F',
      },
      areaStyle: {
        color: 'rgba(0, 167, 79, .3)',
      },
      emphasis: {
        itemStyle: {
          color: '#00A74F',
          borderWidth: 0,
        },
      },
    },
  ],
};
