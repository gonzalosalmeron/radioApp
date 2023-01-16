import Navigation from './src/navigation/Navigation.jsx'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default function App () {
  return (
    <SafeAreaView style={style.container}>
      <Navigation />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  }
})
