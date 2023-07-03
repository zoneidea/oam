import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import logo from '../../assets/images/logo.png'
import styles from '../../style/style';
import TabBackground from '../../components/TabBackground';

const Systemmenuscreen = ({ navigation }) => {

    useEffect(() => {

    }, []
    );

    return (
        <TabBackground style={[styles.container]}>
            <View style={[styles.container, { alignItems: 'center', paddingTop: 20 }]}>
                <Text>Systemmenuscreen</Text>
            </View>
        </TabBackground>
    );
};

export default Systemmenuscreen;
