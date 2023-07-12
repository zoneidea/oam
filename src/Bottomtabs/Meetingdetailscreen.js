import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import TabBackground from '../../components/TabBackground';
import { GRAY_COLOR, ORANGE_COLOR } from '../../utils/constants';
import { panelScaleWidth } from '../../utils/utils';

const DEVICE_WIDTH = Dimensions.get('window').width
const Meetingdetailscreen = ({ navigation }) => {

    useEffect(() => {

    }, []
    );

    return (
        <TabBackground style={[styles.container]}>
            <ScrollView style={[styles.container]}>
                <View style={[styles.container, { alignItems: 'center', paddingTop: 20 }]}>
                    <Text style={[styles.fontBold, { fontSize: 18 }]}>{`ประชุมนำเสนอตัวอย่างระบบบริหารการประชุม`}</Text>
                    <Text style={[styles.fontBold, { fontSize: 14 }]}>{`วันที่ประชุม 15 มีนาคม 2566 สถานที่ห้องประชุม 102`}</Text>
                    <Text style={[styles.fontBold, { fontSize: 14 }]}>{`เวลา 09:00 - 12:00`}</Text>
                    <View style={[styles.containerRow]}>
                        <Text style={[styles.fontBold, { fontSize: 14 }]}>{`สถานะ: `}</Text>
                        <Text style={[styles.fontBold, { fontSize: 14, color: ORANGE_COLOR }]}>{` รอการประชุม`}</Text>
                    </View>
                    <View style={[styles.hr]}></View>
                    <View style={[{ width: panelScaleWidth(DEVICE_WIDTH + 220), borderRadius: 20, borderWidth: 1, padding: 20 }]}>
                        <View style={[styles.container]}>
                            <Text>{`วาระที่ 1 ประธานแจ้งที่ประชุมทราบ`}</Text>
                            <View style={[styles.hrGray]}></View>
                            <Text>{`วาระที่ 2 รับรองรายงานการประชุม`}</Text>
                            <View style={[styles.hrGray]}></View>
                            <Text>{`วาระที่ 3 เรื่องเพื่อพิจารณา`}</Text>
                            <View style={[styles.hrGray]}></View>
                            <Text>{`วาระที่ 4 เรื่องอื่นๆ ถ้ามี`}</Text>
                        </View>
                    </View>
                    <View style={[styles.hr]}></View>
                    <View style={[styles.hr]}></View>
                    <View style={[styles.hr]}></View>
                    <View>
                        <TouchableOpacity style={[styles.buttonContainer, styles.center, { backgroundColor: ORANGE_COLOR }]}
                            onPress={() => null}>
                            <Text style={[styles.fontBold, { color: 'white' }]}>{`ตอบรับการประชุม`}</Text>
                        </TouchableOpacity>
                        <View style={[styles.hr]}></View>
                        <TouchableOpacity style={[styles.buttonContainer, styles.center, { backgroundColor: GRAY_COLOR }]}
                            onPress={() => navigation.pop()}>
                            <Text style={[styles.fontBold, { color: 'white' }]}>{`กลับ`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </TabBackground>
    );
};

export default Meetingdetailscreen;
