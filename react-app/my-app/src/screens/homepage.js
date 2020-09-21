import React from 'react'
import { View } from 'react-native';
import { Button } from 'react-native-elements';

/*
This file sets up a basic homepage navigation for the app.
*/


class HomePage extends React.Component{

    productsButton({navigation}) {
        return (
            <Button
                title="Products"
                onPress={() => this.props.navigation.navigate('Products')}
            />
        );
    }

    productMatchButton({navigation}) {
        return (
            <Button
                title="Product Search"
                onPress={() => this.props.navigation.navigate('Product Match')}
            />
        );
    }

    render () {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <Button
                    title="Products"
                    onPress={() => this.props.navigation.navigate('Products')}
                />
                <Button
                    title="Product Search"
                    onPress={() => this.props.navigation.navigate('Product Match')}
                />
            </View>
        );
    }
}

export default HomePage;