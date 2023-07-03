import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import { panelScaleWidth, panelScaleHeight } from '../../utils/utils'
import TabBackground from '../../components/TabBackground';
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR, ORANGE_COLOR } from '../../utils/constants';

const Notificationscreen = ({ navigation }) => {
    const [cateMenu, setCateMenu] = useState([
        {
            menuId: 1,
            menuName: `ทั้งหมด`,
            menuActive: false,
            menuIconName: `ellipsis-h`
        },
        {
            menuId: 2,
            menuName: `ระบบสารบรรณ`,
            menuActive: false,
            menuIconName: `book`
        },
        {
            menuId: 3,
            menuName: `ระบบบริหารการประชุม`,
            menuActive: false,
            menuIconName: `users`
        },
        {
            menuId: 4,
            menuName: `ระบบจองห้องประชุม`,
            menuActive: false,
            menuIconName: `tv`
        },
        {
            menuId: 5,
            menuName: `ระบบจัดเก็บ`,
            menuActive: false,
            menuIconName: `cloud-upload`
        }
    ])

    const menuItemClick = (menuId) => {
        cateMenu.map(function (item, index) {
            if (item.menuId == menuId) {
                item.menuActive = true
            } else {
                item.menuActive = false
            }
        })

        setCateMenu((prevState) => {
            prevState = cateMenu
            return [...prevState]
        })
    }

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={[styles.shadow, styles.center, item.menuActive ? styles.notificationCateButtonActive : styles.notificationCateButtonNormal]}
                onPress={() => menuItemClick(item.menuId)}>
                <Icon name={item.menuIconName} size={30} color={item.menuActive ? ORANGE_COLOR : SECONDARY_COLOR} />
                <Text style={[{ color: SECONDARY_COLOR, fontSize: 10, textAlign: 'center' }]}>{`${item.menuName}`}</Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {

    }, []
    );

    return (
        <TabBackground style={[styles.container]}>
            <View style={[styles.container, { alignItems: 'center', paddingTop: 20 }]}>
                <View style={[styles.containerRow, { alignItems: 'center', justifyContent: 'center', marginBottom: 5 }]}>
                    <Icon name="bell" size={20} color={SECONDARY_COLOR} />
                    <Text style={[styles.fontBold, { color: SECONDARY_COLOR }]}>{` ระบบการแจ้งเตือน`}</Text>
                </View>
                <View style={[{ width: '95%', height: 30, padding: 5, backgroundColor: '#D2B4DE', borderRadius: 50, alignSelf: 'center', justifyContent: 'center' }]}>
                    <Text style={[{ color: SECONDARY_COLOR, fontSize: 14 }]}>{`เลือกหมวดหมู่การแจ้งเตือน`}</Text>
                </View>
                <View style={[styles.hr]}></View>
                <FlatList
                    data={cateMenu}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={_renderItem} />
                <View style={[styles.hr]}></View>
            </View>
        </TabBackground>
    );
};

export default Notificationscreen;
