import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import theme from '../theme'

const CardRadioBig = radio => {
  const r = radio.data

  return (
    <Pressable style={style.card}>
      <View style={style.info}>
        <View>
          <Text numberOfLines={1} style={style.textPri}>{r.name}</Text>
          <Text style={style.textSec}>{r.freq} {r.mhz}</Text>
        </View>
        <Ionicons name='ios-play-circle' size={30} color={theme.colors.black80} />
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  card: {
    padding: 10,
    height: 160,
    width: Dimensions.get('window').width / 1.3,
    borderRadius: 16,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.black80
  },
  info: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 6,
    paddingVertical: 6
  },
  textPri: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.black,
    overflow: 'hidden'
  },
  textSec: {
    fontSize: 13,
    color: theme.colors.black,
    marginTop: -1.5
  }
})

export default CardRadioBig
