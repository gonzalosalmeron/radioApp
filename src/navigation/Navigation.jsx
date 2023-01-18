import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../pages/Main/MainScreen'
import NationalScreen from '../pages/Nationals/NationalScreen'
import { FontAwesome5, Feather, Octicons } from '@expo/vector-icons'
import theme from '../theme'

const Navigation = () => {
  const Tab = createBottomTabNavigator()
  const navTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: '#FFFFFF',
      card: '#FFFFFF',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)'
    }
  }

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.navIcon
      }}
      >
        <Tab.Screen
          name='Main' component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='National' component={NationalScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='compass' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Favourites' component={NationalScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name='heart' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
