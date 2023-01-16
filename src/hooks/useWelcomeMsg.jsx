import { useState, useEffect } from 'react'

const msg = (hour) => {
  if (hour > 5 && hour < 13) return '¡Buenos días!'
  if (hour > 12 && hour < 21) return '¡Buenos tardes!'
  return '¡Buenos noches!'
}

export const useWelcomeMsg = () => {
  const [currMsg, setCurrMsg] = useState(null)

  useEffect(() => {
    setCurrMsg(msg(new Date().getHours()))
  }, [])

  return [currMsg]
}
