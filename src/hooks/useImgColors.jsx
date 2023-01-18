import ImageColors from 'react-native-image-colors'
import { useEffect, useState } from 'react'

export const useImgColors = url => {
  const [colors, setColors] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getColors = async uri => await ImageColors.getColors(uri, {
      cache: true,
      key: 'unique_key'
    })
    setColors(getColors(url))
  }, [])

  return { colors, loading }
}
