import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import productCard from '../components/productCard'
import productMatrix from '../screens/productMatrix'
import productDetail from '../screens/productDetail'

const Stack = createStackNavigator()
//   {
//     productMatrix : {
//       screen: productMatrix,
//       navigationOptions: { title: 'Products'}
//     },
//     productDetail: {
//       screen: productDetail,
//       navigationOptions: {title: 'Product Details'}
//     }
//   },
//   {
//     initialRouteName: "productMatrix"
//   }
// )

function MainStackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Products' component={productCard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNav