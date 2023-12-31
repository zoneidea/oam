import React, { useState, useEffect } from 'react'
import { View, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { connect, useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './Bottomtabs/Homescreen'
import Systemmenuscreen from './Bottomtabs/Systemmenuscreen';
import Notificationscreen from './Bottomtabs/Notificationscreen';
import Menuscreen from './Bottomtabs/Menuscreen';
import Meetingdetailscreen from './Bottomtabs/Meetingdetailscreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navigationRef = React.createRef();

// function HomeStack() {
//     return (
//         <Stack.Navigator
//             // headerMode='float'
//             initialRouteName='Home'
//             screenOptions={{
//                 gestureEnabled: false
//             }}>
//             <Stack.Screen name="Home" component={Homescreen}
//                 options={{
//                     headerTransparent: true,
//                     headerTitle: ''
//                 }} />
//             <Stack.Screen name="Meetingdetail" component={Meetingdetailscreen}
//                 options={{
//                     headerTransparent: true,
//                     headerTitle: ''
//                 }} />
//         </Stack.Navigator>
//     )
// }

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    display: 'flex',
                    position: 'absolute',
                    bottom: 5,
                    left: 20,
                    right: 20,
                    backgroundColor: '#775BC4',
                    borderRadius: 30,
                    height: 60,
                },
                tabBarShowLabel: false,
                headerShown: false,
            })}>
            <Tab.Screen name="Home" component={Homescreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={20} color={focused ? 'orange' : 'white'} />
                    ),
                }} />
            <Tab.Screen name="System" component={Systemmenuscreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="th" size={20} color={focused ? 'orange' : 'white'} />
                    ),
                }} />
            <Tab.Screen name="Notification" component={Notificationscreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="bell" size={20} color={focused ? 'orange' : 'white'} />
                    ),
                }} />
            <Tab.Screen name="Menu" component={Menuscreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="bars" size={20} color={focused ? 'orange' : 'white'} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

const TabMainscreen = () => {

    return (
        //   <NavigationContainer ref={navigationRef} >
        <BottomTabs />
        //   </NavigationContainer>
    );
};

export default TabMainscreen;