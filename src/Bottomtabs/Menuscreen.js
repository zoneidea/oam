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
import TabBackground from '../../components/TabBackground';

const Menuscreen = ({ navigation }) => {

    useEffect(() => {

    }, []
    );

    return (
        <TabBackground style={[styles.container]}>
            <View style={[styles.container, { alignItems: 'center', paddingTop: 20 }]}>
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
                    onPress={() => navigation.replace('Login')}>
                    <LinearGradient
                        style={[styles.containerRow, { flex: 1, width: '100%', borderRadius: 15, alignItems: 'center', paddingLeft: 40 }]}
                        start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                        colors={['#FADBD8', '#F5B7B1', '#F1948A']}>
                        <Icon name="sign-out" size={35} color={'white'} />
                        <Text style={[styles.fontBold, { color: 'white', fontSize: 16, paddingLeft: 20 }]}>{`ออกจากระบบ`}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </TabBackground>
    );
};

export default Menuscreen;
