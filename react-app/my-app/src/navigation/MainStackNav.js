import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import productMatrix from '../screens/productMatrix'

const Stack = createStackNavigator()

function MainStackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='productMatrix' component={productMatrix} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNav