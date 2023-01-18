import React from 'react'
import { FlatList, View } from 'react-native'
import CardRadioBig from './CardRadioBig'
import theme from '../theme'

const RadioBigList = ({ data }) => (
  <FlatList
    style={{ marginTop: 20, paddingLeft: theme.padding.default }}
    data={data}
    renderItem={({ item }) => <CardRadioBig data={item} />}
    keyExtractor={item => item.mhz}
    horizontal
    ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
  />
)

export default RadioBigList
