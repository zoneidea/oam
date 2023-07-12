import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  LogBox,
  ActivityIndicator
} from 'react-native';
LogBox.ignoreAllLogs()
import moment from 'moment';
import Orientation from 'react-native-orientation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect, useSelector, useDispatch } from 'react-redux'
import {
  setCustomTextInput,
  setCustomText,
} from 'react-native-global-props'

const customTextProps = {
  style: {
    fontSize: 18,
    fontFamily: 'SinghaEstate-Regular',
  }
};

const customTextInputProps = {
  style: {
    fontSize: 16,
    fontFamily: 'SinghaEstate-Regular',
  }
};
setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);

moment.locale('th');
require('moment/locale/th.js');

import { GenerateDateMonth } from './actions';

import styles from './style/style'
import Splashscreen from './src/Splashscreen';
import Loginscreen from './src/Loginscreen';
import Pincodescreen from './src/Pincodescreen';
import TabMainscreen from './src/TabMainscreen';
import Meetingdetailscreen from './src/Bottomtabs/Meetingdetailscreen';
import Esarabunscreen from './src/Bottomtabs/Esarabunscreen';
import Edocumentscreen from './src/Bottomtabs/Edocementscreen';

const Stack = createStackNavigator();
const navigationRef = React.createRef();

const App = () => {
  const dispatch = useDispatch()
  const reducer = useSelector(state => state.fetchReducer)

  useEffect(() => {
    Orientation.lockToPortrait()
    // dispatch(GenerateDateMonth())
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef} >
        <Stack.Navigator initialRouteName='Splash'
          screenOptions={{
            gestureEnabled: false
          }}>
          <Stack.Screen name="Splash" component={Splashscreen}
            options={{
              headerTransparent: true,
              headerTitle: ''
            }} />
          <Stack.Screen name="Login" component={Loginscreen}
            options={{
              headerTransparent: true,
              headerTitle: ''
            }} />
          <Stack.Screen name="Pin" component={Pincodescreen}
            options={{
              headerTransparent: true,
              headerTitle: ''
            }} />
          <Stack.Screen name="BottomTab" component={TabMainscreen}
            options={{
              headerTransparent: true,
              headerTitle: ''
            }} />
          <Stack.Screen name="Meetingdetail" component={Meetingdetailscreen}
            options={{
              headerTransparent: true,
              headerTitle: '',
              headerBackTitle: '',
              headerShown: false
            }} />
          <Stack.Screen name="Esarabun" component={Esarabunscreen}
            options={{
              headerTransparent: true,
              headerTitle: '',
              headerBackTitle: '',
              headerShown: false
            }} />
          <Stack.Screen name="Edocument" component={Edocumentscreen}
            options={{
              headerTransparent: true,
              headerTitle: '',
              headerBackTitle: '',
              headerShown: false
            }} />
        </Stack.Navigator>
        {
          reducer.indicator ?
            <View style={[styles.loadingIndicator]}>
              <ActivityIndicator color={`white`} />
            </View>
            :
            null
        }
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
