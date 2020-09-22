import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';


class productCard extends React.Component{
    render () {
        return (
            <ul>
            <Card
                image= {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Michael_Kors_Jet_Set_Travel_MD_Multifunction_Tote_Shopper_30T4GTVT6I_Kalbsleder_braun_-_schwarz_%282%29_%2816358414098%29.jpg'}}>
                <Text>
                    Gucci Bag
                </Text>
                        <Button
                onPress={() => this.props.navigation.navigate('Details')}
                title="Open details page"
            />
            </Card>  
            <Card
                image= {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Michael_Kors_Jet_Set_Travel_MD_Multifunction_Tote_Shopper_30T4GTVT6I_Kalbsleder_braun_-_schwarz_%282%29_%2816358414098%29.jpg'}}>
                <Text>
                    Gucci Bag
                </Text>
                        <Button
                onPress={() => this.props.navigation.navigate('Details')}
                title="Open details page"
            />
                
            </Card >
            <Card
                image= {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Michael_Kors_Jet_Set_Travel_MD_Multifunction_Tote_Shopper_30T4GTVT6I_Kalbsleder_braun_-_schwarz_%282%29_%2816358414098%29.jpg'}}>
                <Text>
                    Gucci Bag
                </Text>
                        <Button
                onPress={() => this.props.navigation.navigate('Details')}
                title="Open details page"
            />
                
            </Card >
            
            </ul>

        );
    }
}

// const styles = StyleSheet.create({
//     name: {
//         color: '#5a647d',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     price: {
//         fontWeight: 'bold',
//         marginBottom: 10
//     },
//     description: {
//         fontSize: 10,
//         color: '#c1c4cd'
//     },
//     text: {
//         color: '#101010',
//         fontSize: 24,
//         fontWeight: 'bold'
//       }
// });

export default productCard;