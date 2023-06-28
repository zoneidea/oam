import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import AppBackground from '../../components/AppBackground';

const Homescreen = ({ navigation }) => {

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
                        <View style={{ flex: 0.3}}>
                            <View style={{ width: 80, height: 80, borderWidth: 2, borderColor: 'white', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={logo} style={{ resizeMode: 'center', width: 80, height: 80}} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}></View>
            </View>
        </AppBackground>
    );
};

export default Homescreen;
