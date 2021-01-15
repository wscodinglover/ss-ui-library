import React, { Component, createRef } from 'react';
import { Slider } from 'antd';
import classnames from 'classnames';
// import gradient from '../_utils/gradient';

/*
 * @notice: 基于antd Slider组件，以下是自定义新增部分
 * @params {String} theme 主题，默认ss主题 common
 *                             彩虹色 rainbow
 *
 * */

type SliderProps = {
  className: string;
  // 设置初始取值
  defaultValue: number | number[];
  // 双滑块模式
  range: boolean;
  min: number;
  max: number;
  theme: string | undefined;
};

class SS_Slider extends Component<SliderProps, any> {
  private sliderPart = createRef<Slider>();

  // default value
  static defaultProps = {
    theme: 'common',
    defaultValue: 0,
    min: 0,
    max: 100,
  };

  // state value
  state = {
    defaultValue: this.props.defaultValue,
  };

  componentDidMount() {
    this.defaultValueHandle();
    // 处理marks不存在0和100的情况
    this.handleMarks();
    // 彩虹主题时，执行渐变计算,默认执行一次
    this.rainbowTheme(this.state.defaultValue);
  }

  // 多场景判断defaultValue的值
  defaultValueHandle() {
    const { defaultValue, range, min, max } = this.props;
    let _defaultValue: number | number[] = 0;
    if (range) {
      _defaultValue = defaultValue || [0, 0];
    } else {
      _defaultValue = defaultValue || 0;
    }
    if (min && max) {
      _defaultValue = defaultValue || min;
    }

    this.setState({
      defaultValue: _defaultValue,
    });
  }

  // 彩虹主题滑块渐变计算
  rainbowTheme(value: any) {
    if (this.props.theme === 'rainbow') {
      console.log(value);
      // const colorList: any[] = gradient(value, this.props);
      // // @ts-ignore
      // const { handlesRefs }: any = this.sliderPart.current.rcSlider;
      // Object.keys(handlesRefs).forEach((handel: any) => {
      //   const elem = handlesRefs[handel];
      //   elem.handle.style.backgroundColor = colorList[handel].handelColor;
      // });
    }
  }

  // 滑动时，gradient负责计算滑块的rgb值
  sliderChange(value: any) {
    // 彩虹主题时，执行渐变计算
    this.rainbowTheme(value);
  }

  // 处理marks不存在0和100的情况
  handleMarks() {
    const { marks }: any = this.props;
    if (marks) {
      if (!marks[0]) {
        // eslint-disable-next-line no-void
        marks[0] = void 0;
      }
      if (!marks[100]) {
        // eslint-disable-next-line no-void
        marks[100] = void 0;
      }
    }
  }

  render() {
    const { className, theme, ...reset } = this.props;

    return (
      // @ts-ignore
      <Slider
        ref={this.sliderPart}
        className={classnames('ss-slider', className, { 'ss-slider-rainbow': theme === 'rainbow' })}
        onChange={this.sliderChange.bind(this)}
        {...reset}
      />
    );
  }
}

export default SS_Slider;
