import React from "react";
import {Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, Platform} from "react-native";
import {Input} from 'native-base'
import Carousel from "react-native-snap-carousel";

export default class HomeHeader extends React.Component {


    constructor(props) {
        super();
        this.state = {
            errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
    }

    init() {
        this.state = this.headerSlayers;
        console.log("ThumbnailCarousel Props: ", this.props)
    }

    render = () => {

        console.log("slayers: updating")

        return (
            <View style={styles.container}>


                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={this.headerSlayers.slayers}
                    renderItem={this._renderItem.bind(this)}
                    onSnapToItem={this.handleSnapToItem.bind(this)}
                    sliderWidth={width}
                    itemWidth={width}
                    layout={'default'}
                    firstItem={0}
                    autoplay={true}
                    autoplayDelay={4000}
                    autoplayInterval={4000}
                    loop={true}
                />




            </View>


        );
    }


    headerSlayers = {
        slayers: [
            {
                id: "WpIAc9by5iU",
                thumbnail: "https://indiadesire.com/content/upto%2030%20to%2070.jpg",
                title: ""
            }, {
                id: "sNPnbI1arSE",
                thumbnail: "https://www.shopickr.com/wp-content/uploads/2017/06/zivame-insane-lingerie-sale-2017.jpg",
                title: ""
            }, {
                id: "VOgFZfRVaww",
                thumbnail: "https://www.shopickr.com/wp-content/uploads/2015/08/zivame-peri-peri-sale-lingerie-bra-8-15-2015.jpg",
                title: ""
            }
        ]
    };

    handleSnapToItem(index) {
        console.log("snapped to ", index)
    }


    _renderItem = ({item, index}) => {
        console.log("rendering,", index, item);
        return (
            <View style={styles.ThumbnailBackgroundView}>
                <TouchableOpacity>
                    <Image style={styles.CurrentVideoImage} source={{uri: item.thumbnail}}/>
                    <Text style={styles.VideoTitleText}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    VideoTitleText: {
        color: 'white',
        top: 0,
        fontSize: 50
    },

    CurrentVideoImage: {
        top: 0,
        width: width,
        height: height / 3.8,
    },

    ThumbnailBackgroundView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },

    CarouselBackgroundView: {
        backgroundColor: 'white',
        height: height / 3.8,
        width: width
    },
    input: {
        zIndex: 1,
        position: 'absolute',
        top: height / 4.8,
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
    }
});
