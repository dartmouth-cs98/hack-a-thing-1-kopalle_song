import * as React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native-elements';
import productCard from '../components/productCard'
import ProductMatch from '../screens/match-product-page';
import HomePage from '../screens/homepage';
import productMatrix from '../screens/productMatrix'
import productDetail from '../screens/productDetail'

/*
This file sets up the basic navigation of the mobile app. 
*/

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
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='Products' component={productCard} />
        <Stack.Screen name='Product Match' component={ProductMatch} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNav