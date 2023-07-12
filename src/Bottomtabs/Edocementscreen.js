import React, { useRef, useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    Platform,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { WebView } from 'react-native-webview'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchInput, { createFilter } from 'react-native-search-filter';

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import TabBackground from '../../components/TabBackground';
import { INFO_COLOR, ORANGE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SOFT_COLOR, WARNING_COLOR, GRAY_COLOR } from '../../utils/constants';
import { panelScaleHeight, panelScaleWidth } from '../../utils/utils';

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HIGHT = Dimensions.get('window').height
const Edocumentscreen = ({ navigation }) => {
    const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
    const [modalVisible, setModalVisible] = useState(false)
    const [history, setHistory] = useState([
        {
            id: 1,
            status: 1,
            stepname: 'ผู้ร่าง',
            stepby: 'นายxx XXXXXX',
            stepdate: '19/11/256'
        },
        {
            id: 2,
            status: 2,
            stepname: 'ผู้ตรวจสอบ',
            stepby: 'นายYYY YYYYYYY',
            stepdate: '19/11/256'
        },
        {
            id: 3,
            status: 3,
            stepname: 'ผู้ลงนาม',
            stepby: 'นายzzz zzzzz',
            stepdate: '19/11/256'
        }
    ])

    const _renderHistory = ({ item, index}) => {
        return (
            <View style={[styles.containerRow, { alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'gray', padding: 10 }]}>
                <Icon color={SECONDARY_COLOR} name={`user-circle`} size={20} />
                <Text style={[{ width: 50, height: 20, backgroundColor: INFO_COLOR, padding: 2, fontSize: 12, color: 'white', textAlign: 'center' }]}>{item.stepname}</Text>
                <Text style={{ fontSize: 12 }}>{item.stepby}</Text>
                <Text style={{ fontSize: 12 }}>{`วันที่ร่าง ${item.stepdate}`}</Text>
            </View>
        )
    }
    useEffect(() => {

    }, []
    );

    return (
        <TabBackground style={[styles.container]}>
            <View style={[styles.container, { alignItems: 'center', paddingTop: 20 }]}>
                <View style={[styles.containerRow, { backgroundColor: SOFT_COLOR, justifyContent: 'space-between', alignItems: 'center', width: panelScaleWidth(DEVICE_WIDTH + 220), padding: 10, borderRadius: 25 }]}>
                    <Icon color={SECONDARY_COLOR} name={`book`} size={40} />
                    <Text style={[styles.fontBold, { fontSize: 24, color: SECONDARY_COLOR }]}>{`บันทึกหนังสือ1`}</Text>
                    <Text style={{ backgroundColor: WARNING_COLOR, borderRadius: 20, padding: 4, fontSize: 12 }}>{`รอตรวจสอบ`}</Text>
                </View>
                <View style={[styles.hr]}></View>
                <View style={[styles.hr]}></View>
                <ScrollView style={[styles.container]}>
                    <View style={[styles.container, { alignItems: 'center' }]}>
                        <View style={{ width: panelScaleWidth(DEVICE_WIDTH + 300), height: panelScaleHeight(DEVICE_HIGHT - 350), borderWidth: 1, borderColor: 'gray' }}>
                            <WebView
                                originWhitelist={['*']}
                                javaScriptEnabled={true}
                                scalesPageToFit={true}
                                scrollEnabled={false}
                                setBuiltInZoomControls={false}
                                setDisplayZoomControls={false}
                                setSupportMultipleWindows={false}
                                automaticallyAdjustContentInsets={false}
                                injectedJavaScript={INJECTEDJAVASCRIPT}
                                source={{ uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.orimi.com/pdf-test.pdf' }}
                                style={{ width: '100%', height: '100%' }} />
                        </View>
                        <View style={[styles.hr]}></View>
                        <View>
                            <View style={[styles.panelContainer, styles.shadow, { height: 150 }]}>
                                <View style={{ width: '100%', height: 40, backgroundColor: 'rgba(171, 178, 185, 0.6)', alignItems: 'center', flexDirection: 'row', paddingLeft: 10 }}>
                                    <Icon color={SECONDARY_COLOR} name={`map-signs`} size={20} />
                                    <Text style={{ color: SECONDARY_COLOR, fontSize: 16 }}>{` เส้นทางการเดินหนังสือ`}</Text>
                                </View>
                                <View>
                                    <FlatList
                                        data={history}
                                        renderItem={_renderHistory}
                                        keyExtractor={(item) => item.id} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ position: 'absolute', bottom: 5, alignItems: 'center', width: DEVICE_WIDTH }}>
                <TouchableOpacity style={[styles.buttonContainer, styles.center, { backgroundColor: GRAY_COLOR }]}
                    onPress={() => navigation.pop()}>
                    <Text style={[styles.fontBold, { color: 'white' }]}>{`กลับ`}</Text>
                </TouchableOpacity>
            </View>
        </TabBackground>
    );
};

export default Edocumentscreen;
