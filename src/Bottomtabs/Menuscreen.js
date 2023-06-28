import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import AppBackground from '../../components/AppBackground';

const Menuscreen = ({ navigation }) => {

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
                <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, alignItems: 'center', paddingTop: 30 }}>
                    <TouchableOpacity style={[styles.buttonContainer]}
                        onPress={() => null}>
                        <LinearGradient
                            style={[styles.containerRow, { flex: 1, width: '100%', borderRadius: 15, alignItems: 'center', paddingLeft: 40 }]}
                            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                            colors={['#775BC4', '#614799', '#4B326E']}>
                            <Icon name="user-circle" size={35} color={'white'} />
                            <Text style={[styles.fontBold, { color: 'white', fontSize: 16, paddingLeft: 20 }]}>{`โปรไฟล์ของฉัน`}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={[styles.hr]}></View>
                    <TouchableOpacity style={[styles.buttonContainer]}
                        onPress={() => null}>
                        <LinearGradient
                            style={[styles.containerRow, { flex: 1, width: '100%', borderRadius: 15, alignItems: 'center', paddingLeft: 40 }]}
                            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                            colors={['#775BC4', '#614799', '#4B326E']}>
                            <Icon name="cog" size={35} color={'white'} />
                            <Text style={[styles.fontBold, { color: 'white', fontSize: 16, paddingLeft: 20 }]}>{`ตั้งค่า`}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={[styles.hr]}></View>
                    <TouchableOpacity style={[styles.buttonContainer]}
                        onPress={() => null}>
                        <LinearGradient
                            style={[styles.containerRow, { flex: 1, width: '100%', borderRadius: 15, alignItems: 'center', paddingLeft: 40 }]}
                            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                            colors={['#775BC4', '#614799', '#4B326E']}>
                            <Icon name="question-circle" size={35} color={'white'} />
                            <Text style={[styles.fontBold, { color: 'white', fontSize: 16, paddingLeft: 20 }]}>{`ศูนย์ความช่วยเหลือ/คู่มือ`}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={[styles.hr]}></View>
                    <TouchableOpacity style={[styles.buttonContainer]}
                        onPress={() => null}>
                        <LinearGradient
                            style={[styles.containerRow, { flex: 1, width: '100%', borderRadius: 15, alignItems: 'center', paddingLeft: 40 }]}
                            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                            colors={['#FADBD8', '#F5B7B1', '#F1948A']}>
                            <Icon name="sign-out" size={35} color={'white'} />
                            <Text style={[styles.fontBold, { color: 'white', fontSize: 16, paddingLeft: 20 }]}>{`ออกจากระบบ`}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </AppBackground>
    );
};

export default Menuscreen;
