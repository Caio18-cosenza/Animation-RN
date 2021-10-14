import React from 'react';
import { View, Animated, TouchableOpacity, Dimensions } from 'react-native';

import { MotiView, Text } from 'moti';

const { width, height } = Dimensions.get('window');

export function Home({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        from={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: 'timing', duration: 2000 }}
      >
        {' '}
        Texto animado{' '}
      </Text>
      <MotiView
        from={{ translateX: width }}
        animate={{ translateX: 0 }}
        transition={{ type: 'timing', duration: 1000 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}> Botão </Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}
