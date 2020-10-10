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
    axisPointer: {
      lineStyle: {
        color: '#FF9300',
        type: 'dotted',
      },
    },
    backgroundColor: '#193D37',
    borderColor: '#308376',
    borderWidth: 1,
    textStyle: {
      color: '#FFEBC8',
      fontSize: 12,
    },
    extraCssText: 'box-shadow:  0 0 4px 0 rgba(0,0,0,0.50);border-radius: 2px;',
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: [0, '80%'],
      center: ['50%', '50%'],
      labelLine: {
        // 不显示视觉引导线
        show: false,
        length: 10,
        length2: 0,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
