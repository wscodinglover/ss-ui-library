/*
* @Author Davis.qi
* @Date 2020/8/25
* */

const colorArrList = ["#DF201F", "#F9C152", "#00A74F", "#2E3DB5"]

// rgb to hex
function rgbToHex(r: number, g: number, b: number){
  // eslint-disable-next-line no-bitwise
    const hex = ((r<<16) | (g<<8) | b).toString(16);
    return `#${  new Array(Math.abs(hex.length-7)).join("0")  }${hex}`;
}

// hex to rgb
function hexToRgb(hex: any){
    const rgb = [];
    for(let i=1; i<7; i+=2){
      // eslint-disable-next-line radix
        rgb.push(parseInt(`0x${  hex.slice(i,i+2)}`));
    }
    return rgb;
}

function getColorRange (sliderValue: any, props: any) {
    const colorUseList: { parse: number; sliderValue: any; colorArrList: string[]; }[] = []
    function lotParse (val: any) {
      // eslint-disable-next-line radix
        val = parseInt(String((val - props.min) / (props.max - props.min) * 100))
      // eslint-disable-next-line radix
        let parse = parseInt(String(val / (100 / (colorArrList.length - 1)))) + 1
        parse = parse > colorArrList.length - 1 ? colorArrList.length - 1 : parse
        // console.log(val, parse);
        colorUseList.push({
            parse,
            sliderValue: val,
            colorArrList: colorArrList.slice(parse -1, parse + 1),
        })
    }

    // sliderValue是否为Array类型
    if (Array.isArray(sliderValue)) {
        sliderValue.forEach(item => {
            lotParse(item)
        })
    } else {
        lotParse(sliderValue)
    }

    return colorUseList
}

function transformEnd (colorUse: any) {
    const startColor = colorUse.colorArrList[0];
    const endColor = colorUse.colorArrList[1];
    const sliderValue = colorUse.sliderValue;
    // 默认步长100
    const step = 100;
    // 将 hex 转换为rgb
    const sColor = hexToRgb(startColor);
    const eColor = hexToRgb(endColor);


    // 计算R\G\B每一步的差值
    const rStep = (eColor[0] - sColor[0]) / step;
    const gStep = (eColor[1] - sColor[1]) / step;
    const bStep = (eColor[2] - sColor[2]) / step;

    const gradientColorArr = [];
    for(let i=0;i<step;i++){
        // 计算每一步的hex值
      // eslint-disable-next-line radix
        gradientColorArr.push(rgbToHex(parseInt(String(rStep * i + sColor[0])),parseInt(String(gStep * i + sColor[1])),parseInt(String(bStep * i + sColor[2]))));
    }
  // eslint-disable-next-line radix
    let mo = parseInt(String(sliderValue % 33))

    if (mo === 0) {
        mo = sliderValue === 0 ? 0 : 33
    }
    if (sliderValue === 100) {
        mo = 33
    }
  // eslint-disable-next-line radix
    const cIndex = parseInt(String(mo * 3))
    return gradientColorArr[cIndex];
}

// 计算渐变过渡色
function gradient (sliderValue: [number], props: any){
    const {min, max} = props
    if (Array.isArray(sliderValue)) {
        sliderValue[0] = sliderValue[0] < min ? min : sliderValue[0]
        // @ts-ignore
      sliderValue[1] = sliderValue[1] > max ? max : sliderValue[1]
    }
    const colorUseList = getColorRange(sliderValue, props);
    // sliderValue是否为Array类型
    colorUseList.forEach((item: object) => {
        // @ts-ignore
      item.handelColor = transformEnd(item);
    })

    return colorUseList
}

export default gradient
