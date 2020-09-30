import * as React from 'react';
import echarts from 'echarts';

const Chart = (props: ChartProps): React.ReactElement => {
  // 挂载节点
  let chartDom = null;

  // 生命钩子函数
  type Callback = () => void;
  React.useEffect((): Callback => {
    console.log('useEffect');

    // 加载状态
    function showLoading(instance): void {
      instance.showLoading('default', {
        text: '',
        color: '#c23531',
        textColor: '#000000',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        zlevel: 0,
      });
    }

    // 获取实例对象
    let instance = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);

    // 大小自适应
    const resize = (): void => instance.resize();
    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);

    // 默认加载状态
    showLoading(instance);

    // 渲染图表
    if (props.option) {
      if (instance) instance.hideLoading();
      instance.setOption(props.option);
    }

    // 回调函数返回实例
    if (props.onRender) props.onRender(instance);

    // 销毁并清除状态
    return (): void => {
      echarts.dispose(instance);
      window.removeEventListener('resize', resize);
    };
  }, [chartDom, props]);

  // 元素挂载到浏览器事件
  const refOnRender = (el): void => (chartDom = el);

  // 返回组件
  return React.createElement('div', {
    ref: refOnRender,
    style: props.style,
    className: props.className,
  });
};

// 导出组件模块
export default Chart;
