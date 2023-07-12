import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect, useSelector, useDispatch } from 'react-redux'

import styles from '../style/style';
import logo from '../assets/images/logo.png'

const TabBackground = ({ children }) => {
    const reducer = useSelector(state => state.fetchReducer)

    return (
        <LinearGradient
            style={{ flex: 1 }}
            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
            colors={['#775BC4', '#614799', '#4B326E']}>
            <View style={{ flex: 1 }}>
                <View style={[styles.center, { flex: 0.15 }]}>
                    <View style={[styles.containerRow]}>
                        <View style={{ flex: 0.7, paddingLeft: 20 }}>
                            <Text style={[styles.fontBold, { fontSize: 20, color: 'white' }]}>HI..</Text>
                            <Text style={[styles.fontBold, { fontSize: 20, color: 'white' }]}>{`Teerayut Klinsanga`}</Text>
                            {/* <Text style={[styles.fontBold, { fontSize: 20, color: 'white' }]}>{`${reducer.userInfo.userInformation.F_FIRST_NAME} ${reducer.userInfo.userInformation.F_LAST_NAME}`}</Text> */}
                            <Text style={[{ fontSize: 16, color: 'white' }]}>เจ้าหน้าที่</Text>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <View style={{ width: 80, height: 80, borderWidth: 2, borderColor: 'white', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={logo} style={{ resizeMode: 'center', width: 80, height: 80 }} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingBottom: 70 }}>{children}</View>
            </View>
        </LinearGradient>
    );
};

export default TabBackground;
