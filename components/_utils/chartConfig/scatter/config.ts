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
    left: '10%',
  },
  legend: {
    top: 30,
    left: '10%',
    padding: [6, 10],
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
  xAxis: {
    z: 1,
    // 坐标轴
    axisLine: {
      lineStyle: {
        color: '#193D37',
      },
    },
    // 坐标轴刻度
    axisTick: {
      // 不显示
      show: false,
    },
    // 坐标轴刻度标签
    axisLabel: {
      margin: 4,
      color: '#8F9598',
    },
    // 坐标轴所在网格线
    splitLine: {
      // 默认显示
      show: true,
      lineStyle: {
        color: '#193D37',
      },
    },
    // 坐标轴所在网格区域
    splitArea: {
      // 默认显示
      show: true,
      areaStyle: {
        color: ['#121A19', '#172422'],
      },
    },
  },
  yAxis: {
    z: 2,
    // 坐标轴
    axisLine: {
      lineStyle: {
        color: '#193D37',
      },
    },
    // 坐标轴刻度
    axisTick: {
      // 不显示
      show: false,
    },
    // 坐标轴刻度标签
    axisLabel: {
      margin: 4,
      color: '#8F9598',
    },
    // 坐标轴所在网格线
    splitLine: {
      show: true,
      // 默认显示
      lineStyle: {
        color: '#193D37',
      },
    },
  },
  // 滑条
  dataZoom: [
    {
      // slider类型
      type: 'slider',
      // 背景颜色
      backgroundColor: '#121A19',
      // 选中背景颜色
      fillerColor: 'rgba(255,147,0,0.20)',
      // 边框颜色
      borderColor: '#172422',
      // 是否显示细节数据, 默认不显示
      showDetail: false,
      // 数据引用默认透明
      dataBackground: {
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          opacity: 0,
        },
      },
    },
  ],
  series: [
    {
      type: 'scatter',
      showSymbol: false,
      symbolSize: 6,
      itemStyle: {
        color: 'rgba(35,188,120,0.85)',
      },
      emphasis: {
        itemStyle: {
          color: 'rgba(35,188,120,0.85)',
        },
      },
    },
  ],
};
