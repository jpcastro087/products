import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    ScrollView
} from "react-native";
import {Card, CardItem, Body, Left, Input, Button} from 'native-base';
import HomeHeader from "./HomeHeader";
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class HomeScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            errors: []
        }
        this.props = props;
    }


    bottomCards = {
        cards: [
            {'address': 'https://loveafricabikinis.tiendasandreani.com/uploads/imagenes/thumbnail/710x710-47e8d786e812b0ee1892c8d4c500e6faf99b0250.jpg'},
            {'address': 'https://www.tupperware.com.ar/service/appng/tupperware-products/webservice/images/243021_219x219.jpg'},
            {'address': 'https://zona-ac.com/wp-content/uploads/2018/02/Wake-Bottom-Bombacha-Less-Muaa.png'},
            {'address': 'https://www.tupperware.com.ar/service/appng/tupperware-products/webservice/images/037544_219x219.jpg'},
            {'address': 'https://i.etsystatic.com/7982454/r/il/8d2c00/1407716743/il_fullxfull.1407716743_tdhs.jpg'},
            {'address': 'https://www.tupperware.com.ar/service/appng/tupperware-products/webservice/images/269100_219x219.jpg'},
            {'address': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXII3Ewj-m2-SkECe9cdts25ZFoyuYqj-MGpRc8lKFAj3gTVBx'},
            {'address': 'https://www.tupperware.com.ar/service/appng/tupperware-products/webservice/images/073361_219x219.jpg'}
        ]
    }


    drawBottomItem(item) {
        return (
            <Card>
                <CardItem>
                    <Body>
                    <Text></Text>
                    </Body>
                </CardItem>
                <CardItem bordered cardBody>
                    <Image style={{width: 125, height: 100, marginBottom: 0}} source={{uri: item.address}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Body>
                        <Text style={{color: 'peru'}}>$500</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }


    render = () => {

        console.log("slayers: updating")

        return (
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.col}>
                        <HomeHeader/>
                        <View style={styles.input}>
                            <Input placeholder='    Where do U go?' placeholderTextColor='rgba(0,0,0,0.3)'
                                   style={{fontSize: 14, left: 50}}/>
                            <Button style={styles.inputbutton}>
                                <Ionicons name="md-pulse" size={32} color="#fff"/>
                            </Button>
                        </View>
                    </View>
                    {/*<View style={styles.col}>*/}
                    {/*<View style={styles.StyleFragmentOffertView}>*/}
                    {/*<Text style={{color: 'white', fontFamily: 'BEBAS', fontSize: 50, marginLeft: 10, marginTop: 10}}>50%  OFF</Text>*/}
                    {/*</View>*/}
                    {/*</View>*/}


                    <View style={styles.col}>

                        <View style={styles.content}>
                            <View style={styles.colDalam}>
                                <Image style={styles.centralImage}
                                       source={{uri: 'https://storage.jualo.com/original/7419107/tupperware-warmie-set-rumah-tangga-alat-dapur-7419107.jpg'}}/>
                                <View style={styles.frontCover}/>
                            </View>

                            <View style={styles.colDalam}>
                                <Image style={styles.centralImage}
                                       source={{uri: 'https://www.kiabi.ae/on/demandware.static/-/Sites-kiabi-master-catalog/default/dwe3856538/VP/VP323/VP323_MINIBLAC_medium_1.jpg'}}/>
                                <View style={styles.frontCover}/>
                            </View>
                        </View>
                        <View style={styles.col}>
                            <OptimizedFlatList horizontal showsHorizontalScrollIndicator={false}
                                               renderItem={({item}) => this.drawBottomItem(item)}
                                               data={this.bottomCards.cards}
                                               initialNumToRender={15}
                                               style={{marginBottom: 50}}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}


const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

        input: {
            zIndex: 1,
            position: 'absolute',
            top: height / 4.5,
            left: 35,
            width: width / 1.2, height: 47,
            backgroundColor: '#fff',
            // textIndent: 10,
            // borderRadius: 5,
            ...Platform.select({
                ios: {
                    shadowColor: 'rgba(0,0,0, .5)',
                    shadowOffset: {height: 0, width: 0},
                    shadowOpacity: 1,
                    shadowRadius: 5,
                },
                android: {
                    elevation: 10
                },
            }),
        },

        centralImage: {
            width: width / 2.25,
            height: 160,
            marginBottom: 0,
            marginTop: 8,


            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 15,
            elevation: 10,
            backgroundColor: '#FE9A2E',


        },

        frontCover: {
            position: 'absolute',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            width: width / 2.24,
            height: 70,
            marginBottom: 0,
            marginTop: 103,
            marginLeft:5,
            elevation: 10,
            paddingBottom: 1
        },



        inputbutton: {
            position: 'absolute',
            width: 58,
            height: 50,
            left: -10,
            backgroundColor: '#FE9A2E',
            justifyContent: 'center', alignItems: 'center',
        },


        StyleFragmentOffertView: {
            justifyContent: 'center',
            backgroundColor: 'black',
            height: 70,
            width: Dimensions.get('window').width - 12,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 7,
            borderRadius: 5,
            fontFamily: 'BEBAS',
        },

        content: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 5,
            justifyContent: 'center'
        },
        col: {
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        colDalam: {
            padding: 5
        },
        contentBanner: {
            width: '100%',

            alignItems: 'center',
            justifyContent: 'center',
        },

    })
;


// const VideoTitleText = styled.Text`
//   color: white;
//   top: 0;
//   font-size:50
// `
// const CurrentVideoImage = styled.Image`
//   top: 25;
//   box-shadow: 5px 10px;
//   width: ${width};
//   height: 200;
// `
//
// const ThumbnailBackgroundView = styled.View`
//   justify-content: center;
//   align-items: center;
//   width: ${width};
// `
//
// const FragmentOffertView = styled.View`
//   justify-content: center;
//   background-color: black;
//   height: 70;
//   width: ${width - 10};
//   margin-left:auto;
//   margin-right:auto;
//   margin-top:7;
// `
//
// const Container = styled.View`
// `
//
// const CurrentVideoTO = styled.TouchableOpacity`
// `
// const CarouselBackgroundView = styled.View`
//   background-color:white;
//   height: 200;
//   width: ${width};
// `
