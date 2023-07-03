import {
    Platform,
    StyleSheet,
    Dimensions,
    Animated,
    useWindowDimensions
} from 'react-native'
import { PRIMARY_COLOR, THIRD_COLOR, SOFT_COLOR } from '../utils/constants';
import { panelScaleHeight, panelScaleWidth, fontSizeScale } from '../utils/utils';
// import { mainBackgroundColor } from '../utils/contants';
const COMPONENT_HIGHT = 50;
const BANNER_HEIGHT = 250;
const DEVICE_WIDTH = Dimensions.get('screen').width
const DEVICE_HIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerRow: {
        flexDirection: 'row'
    },
    hr: {
        height: 10
    },
    hrGray: {
        width: '90%',
        height: 0.2,
        backgroundColor: 'gray',
        alignSelf: 'center',
        margin: 10
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    fontBold: {
        fontFamily: 'SinghaEstate-Bold'
    },
    inputContainer: {
        width: DEVICE_WIDTH - 60,
        height: COMPONENT_HIGHT - 5,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: PRIMARY_COLOR
    },
    buttonContainer: {
        width: DEVICE_WIDTH - 60,
        height: COMPONENT_HIGHT,
        backgroundColor: 'transparent',
        borderRadius: 15,
    },
    insidePanelContent: {
        paddingTop: 20,
        paddingLeft: 5
    },
    notificationCateButtonNormal: {
        width: panelScaleWidth(140), 
        height: panelScaleHeight(80), 
        borderRadius: 10, 
        backgroundColor: 'white', 
        margin: 2 
    },
    notificationCateButtonActive: {
        width: panelScaleWidth(140), 
        height: panelScaleHeight(80), 
        borderRadius: 10, 
        backgroundColor: '#E5E8E8', 
        margin: 2 
    },
    calendarItem: {
        backgroundColor: SOFT_COLOR, 
        marginBottom: 4, 
        alignItems: 'center', 
        padding: 8, 
        borderRadius: 10
    },
    calendarItemIcon: {
        width: 50, 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(244, 236, 247, 0.8)', 
        borderRadius: 10
    }
})

export default styles;