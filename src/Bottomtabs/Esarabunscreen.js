import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import SearchInput, { createFilter } from 'react-native-search-filter';

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import TabBackground from '../../components/TabBackground';
import { GRAY_COLOR, INFO_COLOR, ORANGE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SOFT_COLOR, WARNING_COLOR } from '../../utils/constants';
import { panelScaleHeight, panelScaleWidth } from '../../utils/utils';

const DEVICE_WIDTH = Dimensions.get('window').width
const Esarabunscreen = ({ navigation }) => {
    const [filterDate, setFilterDate] = useState('2023-07-01')
    const [searchTerm, setSearchTerm] = useState('')
    const [sarabunList, setSarabunList] = useState([
        {
            id: 1,
            number: 'กนอ. 6511/0006',
            orgname: 'หน่วยงานกนอ.',
            doctype: 'บันทึกข้อความ',
            name: 'รัฐมนตรีว่าการกระทรวงอุตสาหกรรม ร่วมหารือกับหน่วยราชการ',
            status: 1
        }, {
            id: 2,
            number: 'กนอ. 6511/0005',
            orgname: 'หน่วยงานกนอ.',
            doctype: 'บันทึกข้อความ',
            name: 'รัฐมนตรีว่าการกระทรวงอุตสาหกรรม ร่วมหารือกับหน่วยราชการ',
            status: 1
        }, {
            id: 3,
            number: 'กนอ. 6511/00026',
            orgname: 'หน่วยงานกนอ.',
            doctype: 'บันทึกข้อความ',
            name: 'รัฐมนตรีว่าการกระทรวงอุตสาหกรรม ร่วมหารือกับหน่วยราชการ',
            status: 2
        }, {
            id: 4,
            number: 'กนอ. 6511/0006',
            orgname: 'สารบรรณกลาง',
            doctype: 'หนังสือภายนอก',
            name: 'รัฐมนตรีว่าการกระทรวงอุตสาหกรรม ร่วมหารือกับหน่วยราชการ',
            status: 3
        }, {
            id: 5,
            number: 'กนอ. 6511/0005',
            orgname: 'สารบรรณกลาง',
            doctype: 'หนังสือภายใน',
            name: 'รัฐมนตรีว่าการกระทรวงอุตสาหกรรม ร่วมหารือกับหน่วยราชการ',
            status: 3
        }, {
            id: 6,
            number: 'กนอ. 6511/0004',
            orgname: 'สารบรรณกลาง',
            doctype: 'หนังสือเวียน',
            name: 'รัฐมนตรีว่าการกระทรวงอุตสาหกรรม ร่วมหารือกับหน่วยราชการ',
            status: 3
        },
    ])

    const _renderSarabun = ({ item, index }) => {
        let btnText = ""
        let btnBackground = 'transparent'
        if (item.status == 1) {
            btnText = "รอตรวจสอบ"
            btnBackground = WARNING_COLOR
        } else if (item.status == 2) {
            btnText = "ลงนาม"
            btnBackground = INFO_COLOR
        } else {
            btnText = ""
            btnBackground = 'transparent'
        }
        return (
            <View key={item.id} style={{ borderBottomWidth: 0.6, borderBottomColor: 'gray', marginTop: panelScaleHeight(50) }}>
                <View style={[styles.containerRow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 12 }}>{item.number}</Text>
                    <Text style={[styles.fontBold, { fontSize: 16, color: PRIMARY_COLOR }]}>{item.doctype}</Text>
                    <Text style={{ fontSize: 12 }}>{item.orgname}</Text>
                </View>
                <View style={[styles.hr]}></View>
                <View style={[styles.hr]}></View>
                <View style={[styles.containerRow]}>
                    <Text style={{ flex: 0.7, flexWrap: 'wrap', fontSize: 17 }}>{item.name}</Text>
                    <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={[styles.center, { width: panelScaleWidth(140), height: panelScaleHeight(35), alignSelf: 'flex-end', backgroundColor: btnBackground }]}
                            onPress={() => navigation.navigate('Edocument')}>
                            <Text style={{ color: 'white', fontSize: 12 }}>{btnText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.hr]}></View>
            </View>
        )
    }

    useEffect(() => {

    }, []
    );

    return (
        <TabBackground style={[styles.container]}>
            <View style={[styles.container, { alignItems: 'center', paddingTop: 20 }]}>
                <View style={[styles.containerRow, { alignItems: 'center', justifyContent: 'center' }]}>
                    <View style={{ flex: 0.7 }}>
                        <View style={[styles.shadow, styles.inputWithIcon, { borderRadius: 15 }]}>
                            <TextInput style={[{ height: panelScaleHeight(80), backgroundColor: 'transparent' }]}
                                onChangeText={(text) => {
                                    setSearchTerm(text)
                                    setSarabunList((prevState) => {
                                        prevState = sarabunList.filter(createFilter(searchTerm, ['doctype', 'orgname', 'name']))
                                    })
                                }} />
                        </View>
                    </View>
                    <View style={{ flex: 0.4, alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.buttonContainer, styles.center, styles.shadow, { backgroundColor: SOFT_COLOR, width: panelScaleWidth(DEVICE_WIDTH - 150) }]}>
                            <Text style={{ color: 'white' }}>{filterDate}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.container, { width: DEVICE_WIDTH - 20, paddingBottom: 15 }]}>
                    <View style={[styles.containerRow, { justifyContent: 'space-between', }]}>
                        <Text style={[styles.fontBold, { color: PRIMARY_COLOR }]}>{moment().format('ll')}</Text>
                        <Text style={[styles.fontBold, { fontSize: 16, color: PRIMARY_COLOR }]}>{`${sarabunList.length} รายการ`}</Text>
                    </View>
                    <View>
                        <FlatList
                            data={sarabunList}
                            renderItem={_renderSarabun}
                            keyExtractor={(item) => item.id} />
                    </View>
                </View>
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

export default Esarabunscreen;
