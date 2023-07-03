import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import logo from '../assets/images/logo.png'
import styles from '../style/style';
import AppBackground from '../components/AppBackground';

const Splashscreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, []
    );

    return (
        <AppBackground style={[ styles.container ]}>
            <View style={[styles.container, styles.center]}>
                <Image source={logo} style={{ width: '50%', resizeMode: 'contain' }} />
                <Text style={[styles.fontBold, { color: 'white' }]}>{`การนิคมอุตสาหกรรมแห่งประเทศไทย`}</Text>
                <View style={[styles.containerRow]}>
                    <Text style={{ fontSize: 14, color: 'white'}}>{`Office`}</Text>
                    <Text style={[{ color: 'orange', fontSize: 14 }]}>{` Automation `}</Text>
                    <Text style={{ fontSize: 14, color: 'white'}}>{`Management System`}</Text>
                </View>
            </View>
        </AppBackground>
    );
};

export default Splashscreen;
