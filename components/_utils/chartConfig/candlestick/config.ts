/**
 * defaultOption配置，UI设计需求默认外观
 * @type {Object}
 */
const handleIcon =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFENDE0RkRGQTZCMDExRTlCMkM5RTNGNTJEQ0MzNEFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFENDE0RkUwQTZCMDExRTlCMkM5RTNGNTJEQ0MzNEFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUQ0MTRGRERBNkIwMTFFOUIyQzlFM0Y1MkRDQzM0QUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ0MTRGREVBNkIwMTFFOUIyQzlFM0Y1MkRDQzM0QUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz48DKcTAAAAZElEQVR42mL8//8/Ay0AEwONwKjBcMAompfg9e//v5kM/xlkqGMiwxMmRqZ0FqoaCgJAs/4x/JvJRIyhb+qzsLLxGT6aKhBxKJwb95iqkQdLGaCkAWJQ1VCgmYyjhdDQNRggwAAVGSHsZoYG5gAAAABJRU5ErkJggg==';

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
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        color: '#FFEBC8',
        padding: [2, 5],
        // 不需要显示阴影
        shadowColor: 'transparent',
      },
      lineStyle: {
        color: '#FF9300',
        type: 'dotted',
      },
      crossStyle: {
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
      scale: true,
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
    scale: true,
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
      type: 'slider',
      showDetail: false,
      backgroundColor: '#121A19',
      height: 8,
      dataBackground: {
        lineStyle: {
          color: '#193d37',
          width: 1,
          opacity: 1,
        },
        areaStyle: {
          color: 'rgba(255,147,0,0.20)',
        },
      },
      fillerColor: 'rgba(255,147,0,0.20)',
      borderColor: '#172422',
      handleIcon,
      handleStyle: {
        color: '#ffffff',
      },
      handleSize: '200%',
    },
    {
      type: 'inside',
    },
  ],
  series: [
    {
      type: 'candlestick',
    },
  ],
};
