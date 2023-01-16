import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useWelcomeMsg } from '../../../hooks/useWelcomeMsg'
import theme from '../../../theme.js'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{useWelcomeMsg()}</Text>
      <TouchableOpacity>
        <Feather name='settings' size={24} color={theme.colors.black} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding.default,
    paddingTop: theme.padding.defTop,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  h1: {
    fontSize: theme.textSize.header,
    fontWeight: 'bold'
  }
})

export default Header
