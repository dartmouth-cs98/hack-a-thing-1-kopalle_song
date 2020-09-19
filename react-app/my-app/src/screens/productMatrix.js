
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements';

import productCard from '../components/productCard';
// const BASE_URL = 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Michael_Kors_Jet_Set_Travel_MD_Multifunction_Tote_Shopper_30T4GTVT6I_Kalbsleder_braun_-_schwarz_%282%29_%2816358414098%29.jpg';

// const products = [
//   {
//     name: 'Nike Shoes',
//     img: `${BASE_URL}`
//   },
//   {
//     name: 'Shoes 2',
//     img: `${BASE_URL}`
//   },
//   {
//     name: 'Shoes 3',
//     img: `${BASE_URL}`
//   },
//   {
//     name: 'Shoes 4',
//     img: `${BASE_URL}`
//   },
// ];

class productMatrix extends Component {
  render(){
    return (
      <Card image= {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Michael_Kors_Jet_Set_Travel_MD_Multifunction_Tote_Shopper_30T4GTVT6I_Kalbsleder_braun_-_schwarz_%282%29_%2816358414098%29.jpg'}}>
          <Text>
            Gucci Bag
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Details')}
            title="Open details page"
          />        
      </Card>
      // <View style={styles.container}>
      //   {/* <Text style={styles.text}>Products!</Text> */}
      // </View>
    )

  }
}

// function productMatrix() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Products!</Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default productMatrix