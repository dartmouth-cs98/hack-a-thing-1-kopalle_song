import React from 'react'
import { Text, View, Platform, Image } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import styles from '../styles/style';

// Following the Expo image picker tutorial: https://docs.expo.io/versions/latest/sdk/imagepicker/
// Folloring this tutorial for Google Vision API requests: https://blog.jscrambler.com/create-a-react-native-image-recognition-app-with-google-vision-api/


class ProductMatch extends React.Component{
    state = {
        image: null,
        googleAnalysis: null
    }
    async componentDidMount() {
        // Ask for camera and album access when first using app
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
		await Permissions.askAsync(Permissions.CAMERA);
    }

    /*
    Function to allow picking an image from camera roll and holding it in base64
    */
    _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
          });
          if (!result.cancelled) {
            this.setState({ image: result.base64 });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };

      /*
      Function to allow picking an image using the camera and holding it in base64
      */
      takePic = async () => {
          let imgPick = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [4,3],
              base64: true
          })

          this.setSelectedImg(imgPick);
      }

      /*
      Setting the image state to the selected image in base64
      */
      setSelectedImg = async (img) => {
          if (!img.cancelled) {
              this.setState({
                  image: img.base64
              });
          }
      }

      /*
      Once image is selected, display the image with the button option to find
      matching products. This triggers the Google Vision API
      */
      displaySelectedImg = () => {
          if (this.state.image) {
              return (
                  <View style={styles.imgContainer}>
                      <Image
                      style={{ width: 300, height:300 }}
                      source={{ uri: `data:image/png;base64,${this.state.image}` }}
                      />
                      <Button
                        title='Find Similar Products!'
                        onPress={this.findSimilarProducts}
                      />
                  </View>
              )
          }
      }
      
      /*
      Function to send the HTTP POST request to the Google Vision API endpoint with the selected image
      */
      findSimilarProducts = async () => {
        try {
            console.log('HERHERHERHE');
            this.setState({
                analyzing: true
            });
            let { image } = this.state;

            const jsonBody = JSON.stringify({
                requests: [
                    {
                      image: {
                        content: image
                      },
                      features: [
                        {
                          type: "PRODUCT_SEARCH",
                          maxResults: 5
                        }
                      ],
                      imageContext: {
                        productSearchParams: {
                          productSet: "projects/product-search-290101/locations/us-east1/productSets/Footwear",
                          productCategories: [
                               "apparel-v2"
                          ],
                        }
                      }
                    }
                  ]
            });

            let results = await fetch(
                "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA6fElvXCjh0XBsUkGW5h4x8QvHhvVWDVA",
                {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: jsonBody
				}
            );

            let jsonRes = await results.json();
            // console.log(jsonRes);

            this.setState({
                googleAnalysis: jsonRes.responses[0].productSearchResults.productGroupedResults[0].results
            });
        } catch (e) {
            console.log(e);
        };
      }


    render () {
        let { image } = this.state;

        return (
            <View style={styles.matchText}>
                <Text style={styles.matchHeader}>
                    Welcome to Product Match!
                </Text>
                <Text style={styles.matchSubHeader}>
                    Take a picture of the apparel you are looking for, and leave the rest to us! We will provide products that most closely 
                    resemble what you want.
                </Text>

                <View>
                    <Button 
                        title="Choose from Camera Roll"
                        onPress={this._pickImage}
                    />
                    <Button 
                        title="Take a Picture"
                        onPress={this.takePic}
                    />
                </View>
                {this.state.image ? this.displaySelectedImg(): null}
                {this.state.googleAnalysis ? 
                    <View>
                        {this.state.googleAnalysis.map(prod => {
                            return (
                                <View style={styles.matchText} key={prod.image}>
                                    <Text style={styles.matchSubHeader}>
                                        Product Name: {`${prod.product.displayName}`}
                                    </Text>
                                    <Text style={styles.matchSubHeader}>
                                        Product Score: {`${prod.score}`}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                :
                    null
                }
            </View>    
        );
    }
}

export default ProductMatch;