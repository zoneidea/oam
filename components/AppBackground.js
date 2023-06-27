import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppBackground = ({ children }) => {

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 0.0}}
      colors={['#775BC4', '#614799', '#4B326E']}>
      <View>{children}</View>
    </LinearGradient>
  );
};

export default AppBackground;
