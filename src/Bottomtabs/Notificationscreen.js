import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import AppBackground from '../../components/AppBackground';
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../../utils/constants';

const Notificationscreen = ({ navigation }) => {

    useEffect(() => {

    }, []
    );

    return (
        <AppBackground style={[styles.container]}>
            <View style={[styles.container]}>
                <View style={[styles.center, { flex: 0.15 }]}>
                    <View style={[styles.containerRow]}>
                        <View style={{ flex: 0.7, paddingLeft: 20 }}>
                            <Text style={[styles.fontBold, { fontSize: 20 }]}>HI..</Text>
                            <Text style={[styles.fontBold, { fontSize: 20 }]}>Teerayut Klinsanga</Text>
                            <Text style={[{ fontSize: 16 }]}>เจ้าหน้าที่</Text>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <View style={{ width: 80, height: 80, borderWidth: 2, borderColor: 'white', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={logo} style={{ resizeMode: 'center', width: 80, height: 80 }} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingTop: 30 }}>
                    <View style={[styles.containerRow, { alignItems: 'center', justifyContent: 'center' }]}>
                        <Icon name="bell" size={20} color={SECONDARY_COLOR} />
                        <Text style={[styles.fontBold, { color: SECONDARY_COLOR }]}>{` ระบบการแจ้งเตือน`}</Text>
                    </View>
                    <View style={[{ width: '90%', height: 30, padding: 5, backgroundColor: '#D2B4DE', borderRadius: 50, alignSelf: 'center', justifyContent: 'center' }]}>
                        <Text style={[{ color: SECONDARY_COLOR, fontSize: 14 }]}>{`เลือกหมวดหมู่การแจ้งเตือน`}</Text>
                    </View>
                    <View style={[styles.hr]}></View>
                    <View style={[styles.containerRow, { justifyContent: 'space-between', alignContent: 'center' }]}>
                        <TouchableOpacity style={[styles.shadow, styles.center, { width: 70, height: 70, borderRadius: 10, backgroundColor: 'white' }]}>
                            <Icon name="ellipsis-h" size={35} color={SECONDARY_COLOR} />
                            <Text style={[{ color: SECONDARY_COLOR, fontSize: 10, textAlign: 'center' }]}>{`ทั้งหมด`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.shadow, styles.center, { width: 70, height: 70, borderRadius: 10, backgroundColor: 'white' }]}>
                            <Icon name="book" size={35} color={SECONDARY_COLOR} />
                            <Text style={[{ color: SECONDARY_COLOR, fontSize: 10, textAlign: 'center' }]}>{`ระบบสารบรรณ`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.shadow, styles.center, { width: 70, height: 70, borderRadius: 10, backgroundColor: 'white' }]}>
                            <Icon name="users" size={35} color={SECONDARY_COLOR} />
                            <Text style={[{ color: SECONDARY_COLOR, fontSize: 10, textAlign: 'center' }]}>{`ระบบบริหารการประชุม`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.shadow, styles.center, { width: 70, height: 70, borderRadius: 10, backgroundColor: 'white' }]}>
                            <Icon name="tv" size={35} color={SECONDARY_COLOR} />
                            <Text style={[{ color: SECONDARY_COLOR, fontSize: 10, textAlign: 'center' }]}>{`ระบบจองห้องประชุม`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.shadow, styles.center, { width: 70, height: 70, borderRadius: 10, backgroundColor: 'white' }]}>
                            <Icon name="cloud-upload" size={35} color={SECONDARY_COLOR} />
                            <Text style={[{ color: SECONDARY_COLOR, fontSize: 10, textAlign: 'center' }]}>{`ระบบจัดเก็บ`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.hr]}></View>
                </View>
            </View>
        </AppBackground>
    );
};

export default Notificationscreen;
