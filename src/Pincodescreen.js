import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import PINCode from '@haskkor/react-native-pincode'

import logo from '../assets/images/logo.png'
import styles from '../style/style';
import AppBackground from '../components/AppBackground';

const Pincodescreen = ({ navigation }) => {

    useEffect(() => {

    }, []
    );

    return (
        <AppBackground>
            <View style={[styles.container]}>
                <View style={[styles.center, { flex: 0.5 }]}>
                    <Image source={logo} style={{ width: '50%', resizeMode: 'contain' }} />
                    <Text style={[styles.fontBold]}>{`การนิคมอุตสาหกรรมแห่งประเทศไทย`}</Text>
                    <View style={[styles.containerRow]}>
                        <Text style={{ fontSize: 14 }}>{`Office`}</Text>
                        <Text style={[{ color: 'orange', fontSize: 14 }]}>{` Automation `}</Text>
                        <Text style={{ fontSize: 14 }}>{`Management System`}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.5, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
                <PINCode status={'enter'} />
            </View>
        </AppBackground>
    );
};

export default Pincodescreen;
