import React from 'react';
import { Slider } from 'antd';
import { SliderProps } from 'antd/lib/slider';
import classnames from 'classnames';
import gradient from '../_utils/gradient';

interface SSSliderProps extends SliderProps {
  theme?: string;
  className?: string;
  onChange?: any;
  min?: number;
  max?: number;
}

class SSSlider extends React.PureComponent<SSSliderProps, any> {
  private silderRef: React.RefObject<any> | null;

  constructor(props: SSSliderProps) {
    super(props);
    this.silderRef = React.createRef();
  }

  /**
   * 彩虹主题滑动条的rgb颜色计算获取
   *
   * */
  rainbowThemeCalc = (value: [number] | number) => {
    const { theme } = this.props;
    if (theme === 'rainbow') {
      const colorList = gradient(value);
      // @ts-ignore
      const handleList = this.silderRef.current.rcSlider.handlesRefs;
      Object.values(handleList).forEach((item: any, index) => {
        item.handle.style.backgroundColor = colorList[index].color;
      });
    }
  };

  /**
   *当 Slider 的值发生改变时，会触发 onChange 事件
   *
   * */
  sliderChange = (value: [number] | number) => {
    const { onChange } = this.props;
    this.rainbowThemeCalc(value);

    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const { className, theme = 'common', min = 0, max = 100, ...reset } = this.props;
    const SliderParams = {
      className: classnames('ss-slider', { 'ss-slider-rainbow': theme === 'rainbow' }, className),
      ...reset,
      onChange: this.sliderChange,
      min,
      max,
    };
    // @ts-ignore
    return <Slider ref={this.silderRef} {...SliderParams} />;
  }
}

export default SSSlider;
