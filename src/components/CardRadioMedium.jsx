import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

const CardRadioMedium = radio => {
  const r = radio.data

  return (
    <Pressable style={{ width: 110 }}>
      <View style={style.card} />
      <View style={style.info}>
        <Text style={style.textSec}>{r.freq} {r.mhz}</Text>
        <Text numberOfLines={1} style={style.textPri}>{r.name}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  card: {
    padding: 10,
    height: 110,
    width: 110,
    borderRadius: 16,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.black80
  },
  info: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingTop: 4
  },
  textPri: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.black
  },
  textSec: {
    fontSize: 12,
    color: theme.colors.black,
    marginTop: -1.5
  }
})

export default CardRadioMedium
