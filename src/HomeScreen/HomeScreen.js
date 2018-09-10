import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    Platform
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
            {'address': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1iq2c0a0ybLiKBeWlv7hWQNgkOjx2SVc0TNxp3HiwvLTgJEk'},
            {'address': 'https://zona-ac.com/wp-content/uploads/2018/02/Wake-Bottom-Bombacha-Less-Muaa.png'},
            {'address': 'https://images-na.ssl-images-amazon.com/images/I/81TIEWcS9bL._SX679_.jpg'},
            {'address': 'https://i.etsystatic.com/7982454/r/il/8d2c00/1407716743/il_fullxfull.1407716743_tdhs.jpg'},
            {'address': 'https://d26lpennugtm8s.cloudfront.net/stores/064/382/products/17xabtr272727271-1e7f4d132e8138116e15305795779966-480-0.jpgpsid1'},
            {'address': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXII3Ewj-m2-SkECe9cdts25ZFoyuYqj-MGpRc8lKFAj3gTVBx'},
            {'address': 'http://www.cotillonconcept.com.ar/images/2948-LABIAL-BOMBACHA-SORPRESA-COTILLON-EROTICO-BROMAS-DESPEDIDA-SOLTERA-SOLTERO.png'}
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
                            <Image style={{width: 170, height: 150, marginBottom: 0}}
                                   source={{uri: 'https://via.placeholder.com/350x250'}}/>
                        </View>

                        <View style={styles.colDalam}>
                            <Image style={{width: 170, height: 150, marginBottom: 0}}
                                   source={{uri: 'https://via.placeholder.com/350x250'}}/>
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
