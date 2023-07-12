import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

import { connect, useSelector, useDispatch } from 'react-redux'

import Helper from '../utils/Helper'
import logo from '../assets/images/logo.png'
import styles from '../style/style';
import AppBackground from '../components/AppBackground';
import { indicatorControll, loginToken, GenerateDateMonth } from '../actions'
import { PRIMARY_COLOR, BASE_URL, LOGIN_URL, HEADERFORMDATA, HEADERJSON } from '../utils/constants';

const Loginscreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const inputUsername = useRef();
  const inputPassword = useRef();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const Login = () => {
    // dispatch(indicatorControll(true))
    fetch('https://dev-oms.ieat.go.th/api/mobile/auth/login', {
      method: 'POST',
      headers: HEADERJSON,
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    }).then((response) => response.json()
    ).then((json) => {
        // dispatch(indicatorControll(false))
        console.log(JSON.stringify(json))
        // if (json.status != 'error') {
        //   dispatch(loginToken(json.token))
        //   dispatch(userinfoControll(true, json.userLogin))
        //   navigation.replace('BottomTab')
        // } else {
        //   alert('พบข้อผิดพลาด', json.message)
        // }
      }).catch((error) => {
        // dispatch(indicatorControll(false))
        console.log('catch' + JSON.stringify(error))
      });

    // let body = {
    //   'username': username,
    //   'password': password
    // }
    // Helper.post(BASE_URL + LOGIN_URL, body, HEADERJSON, (results) => {
    //   console.log(JSON.stringify(results))
    // })

    // try {
    //   const response = await axios({
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json; charset=UTF-8'},
    //     url: 'https://dev-oms.ieat.go.th/api/mobile/auth/login',
    //     body: JSON.stringify({
    //       'username': username,
    //       'password': password
    //     })
    //   })
    //   console.log(JSON.stringify(response))
    // } catch (error) {
    //   console.log(JSON.stringify(error))
    // }
    // navigation.replace('BottomTab')
  }

  useEffect(() => {
    dispatch(GenerateDateMonth())
  }, []
  );

  return (
    <AppBackground style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <View style={[styles.center, { flex: 0.5 }]}>
          <Image source={logo} style={{ width: '50%', resizeMode: 'contain' }} />
          <Text style={[styles.fontBold, { color: 'white' }]}>{`การนิคมอุตสาหกรรมแห่งประเทศไทย`}</Text>
          <View style={[styles.containerRow]}>
            <Text style={{ fontSize: 14, color: 'white' }}>{`Office`}</Text>
            <Text style={[{ color: 'orange', fontSize: 14 }]}>{` Automation `}</Text>
            <Text style={{ fontSize: 14, color: 'white' }}>{`Management System`}</Text>
          </View>
        </View>
        <View style={{ flex: 0.5, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={[styles.container, styles.center]}>
              <TextInput
                ref={inputUsername}
                style={[styles.inputContainer]}
                placeholder='ชื่อผู้ใช้งาน'
                autoCapitalize={false}
                returnKeyType={'next'}
                blurOnSubmit={false}
                value={username}
                placeholderTextColor={PRIMARY_COLOR}
                onChangeText={(text) => setUsername(text)}
                onSubmitEditing={() => inputPassword.current.focus()} />
              <View style={[styles.hr]}></View>
              <TextInput
                ref={inputPassword}
                style={[styles.inputContainer]}
                placeholder='รหัสผ่าน'
                secureTextEntry={true}
                autoCapitalize={false}
                returnKeyType={'done'}
                blurOnSubmit={false}
                value={password}
                placeholderTextColor={PRIMARY_COLOR}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={() => Login()} />
              <View style={[styles.hr]}></View>
              <TouchableOpacity style={{ alignSelf: 'flex-end', paddingRight: 40 }}>
                <Text style={[styles.fontBold, { color: 'orange', fontSize: 14 }]}>{`ลืมรหัสผ่าน`}</Text>
              </TouchableOpacity>
              <View style={[styles.hr]}></View>
              <View style={[styles.hr]}></View>
              <TouchableOpacity style={[styles.buttonContainer]}
                onPress={() => Login()}>
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
