import {Dimensions, PixelRatio} from 'react-native';
const convertWidthPercentToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const convertHeightPercentToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

const responsiveFontSize = fontSize => {

  const { height, width } = Dimensions.get('window')
  if(typeof fontSize === 'string'){
    const parsedFontSize = parseFloat(fontSize)
    const convertResult = Math.sqrt(( height * height ) + ( width * width )) * ( parsedFontSize / 100 )
    return PixelRatio.roundToNearestPixel(convertResult)
  }else{
    const parsedFontSize = parseFloat(fontSize)
    const convertResult = Math.sqrt(( height * height ) + ( width * width )) * ( parsedFontSize / 100 )
    return PixelRatio.roundToNearestPixel(convertResult)
  }

}

const responsiveSize = inputSize => {

  const { height, width } = Dimensions.get('window')
  if(typeof inputSize === 'string'){
    const parsedFontSize = parseFloat(inputSize)
    const convertResult = Math.sqrt(( height * height ) + ( width * width )) * ( parsedFontSize / 100 )
    return PixelRatio.roundToNearestPixel(convertResult)
  }else{
    const parsedFontSize = parseFloat(inputSize)
    const convertResult = Math.sqrt(( height * height ) + ( width * width )) * ( parsedFontSize / 100 )
    return PixelRatio.roundToNearestPixel(convertResult)
  }

}

export {
  convertWidthPercentToDP,
  convertHeightPercentToDP,
  responsiveSize,
  responsiveFontSize,
};