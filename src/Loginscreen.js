import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import logo from '../assets/images/logo.png'
import styles from '../style/style';
import AppBackground from '../components/AppBackground';
import { PRIMARY_COLOR } from '../utils/constants';

const Loginscreen = ({ navigation }) => {

  useEffect(() => {

  }, []
  );

  return (
    <AppBackground style={{ flex: 1 }}>
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
        <View style={{ flex: 0.5, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={[styles.container, styles.center]}>
              <TextInput
                style={[styles.inputContainer]}
                placeholder='ชื่อผู้ใช้งาน'
                autoCapitalize={false}
                returnKeyType={'next'}
                blurOnSubmit={false}
                placeholderTextColor={PRIMARY_COLOR} />
              <View style={[styles.hr]}></View>
              <TextInput
                style={[styles.inputContainer]}
                placeholder='รหัสผ่าน'
                autoCapitalize={false}
                returnKeyType={'next'}
                blurOnSubmit={false}
                placeholderTextColor={PRIMARY_COLOR} />
              <View style={[styles.hr]}></View>
              <TouchableOpacity style={{ alignSelf: 'flex-end', paddingRight: 40 }}>
                <Text style={[styles.fontBold, { color: 'orange', fontSize: 14 }]}>{`ลืมรหัสผ่าน`}</Text>
              </TouchableOpacity>
              <View style={[styles.hr]}></View>
              <View style={[styles.hr]}></View>
              <TouchableOpacity style={[styles.buttonContainer]}
                onPress={() => navigation.replace('BottomTab')}>
                <LinearGradient
                  style={[styles.center, { flex: 1, width: '100%', borderRadius: 10 }]}
                  start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
                  colors={['#775BC4', '#614799', '#4B326E']}>
                  <Text style={[styles.fontBold, { color: 'white', fontSize: 16 }]}>{`ลงชื่อเข้าใช้`}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={{ position: 'absolute', bottom: 5, alignItems: 'center', width: '100%' }}>
            <Text style={{ color: 'black', fontSize: 12 }}>2023 Copyright</Text>
          </View>
        </View>
      </View>
    </AppBackground>
  );
};

export default Loginscreen;
