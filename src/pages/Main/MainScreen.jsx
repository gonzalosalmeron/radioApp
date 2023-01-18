import React from 'react'
import Header from './Partials/Header'
import { ScrollView, View } from 'react-native'
import { useFetch } from '../../hooks/useFetch'

import RadioBigList from '../../components/RadioBigList'
import RadioMediumList from '../../components/RadioMediumList'

const MainScreen = () => {
  const { data } = useFetch('https://radio-api.gonzxlodev.workers.dev/es/malaga.json')

  return (
    <ScrollView>
      <View>
        <Header />
        <RadioBigList data={data} />
        <RadioMediumList data={data} title='Lo más escuchado en Málaga' />
        <RadioMediumList data={data} title='Lo más escuchado en Málaga' />
        <RadioMediumList data={data} title='Lo más escuchado en Málaga' />
      </View>
    </ScrollView>
  )
}

export default MainScreen
