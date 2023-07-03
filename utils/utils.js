import {
    PixelRatio,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = windowWidth / 480;
const panelScaleH = windowHeight / 1024;
const panelScaleW = windowWidth / 765;

export const fontSizeScale = (size) => {
    const newSize = size * fontScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const panelScaleHeight = (size) => {
    const newSize = size * panelScaleH;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const panelScaleWidth = (size) => {
    const newSize = size * panelScaleW;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}