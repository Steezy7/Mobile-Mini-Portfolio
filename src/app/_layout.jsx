import React from 'react'
import { Image, View, Text } from 'react-native'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/images/WhatsApp Image 2025-11-04 at 10.07.50_0a35e3d0.jpg')} style={{ width: 36, height: 36, borderRadius: 8, marginRight: 8 }} />
            <Text style={{fontSize:16, fontWeight: '700', color: '#1E3A8A'}}>My Portfolio</Text>
          </View>
        ),
        headerTitleAlign: 'center',
      }}
    />
  )
}
