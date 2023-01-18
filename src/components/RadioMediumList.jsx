import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CardRadioMedium from './CardRadioMedium'
import theme from '../theme'

const RadioMediumList = ({ data, title }) => (
  <>
    <Text style={style.listTitle}>{title}</Text>
    <FlatList
      style={{ marginTop: 10, paddingLeft: theme.padding.default }}
      data={data}
      renderItem={({ item }) => <CardRadioMedium data={item} />}
      keyExtractor={item => item.mhz}
      horizontal
      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
    />
  </>
)

const style = StyleSheet.create({
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: theme.padding.default,
    marginTop: 20
  }
})

export default RadioMediumList
