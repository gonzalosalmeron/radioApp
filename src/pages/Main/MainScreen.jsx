import React from 'react'
import Header from './Partials/Header'
import { ScrollView, View } from 'react-native'
import theme from '../../theme'

const MainScreen = () => (
  <ScrollView>
    <View style={{ backgroundColor: theme.colors.screenBg, flex: 1 }}>
      <Header />

      <View style={{ height: 200, backgroundColor: 'red' }} />
      <View style={{ height: 200, backgroundColor: 'green' }} />
      <View style={{ height: 200, backgroundColor: 'blue' }} />
      <View style={{ height: 200, backgroundColor: 'yellow' }} />
      <View style={{ height: 200, backgroundColor: 'red' }} />
      <View style={{ height: 200, backgroundColor: 'green' }} />
      <View style={{ height: 200, backgroundColor: 'blue' }} />
      <View style={{ height: 200, backgroundColor: 'yellow' }} />

    </View>
  </ScrollView>
)

export default MainScreen
