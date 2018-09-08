import React from "react";
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import styled from "styled-components/native";
import Carousel from "react-native-snap-carousel";

export default class HomeCHeader extends React.Component {


    render = () => {

        console.log("slayers: updating")

        return (
            <CarouselBackgroundView>
                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={this.state.slayers}
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
            </CarouselBackgroundView>


        );
    }



}



const {width} = Dimensions.get('window')


const VideoTitleText = styled.Text`
  color: white;
  top: 0;
  font-size:50
`
const CurrentVideoImage = styled.Image`
  top: 25;
  box-shadow: 5px 10px;
  width: ${width};
  height: 200;
`

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width}; 
`

const FragmentOffertView = styled.View`
  justify-content: center;
  background-color: black;
  height: 70;
  width: ${width - 10};
  margin-left:auto;
  margin-right:auto;
  margin-top:7;
`

const Container = styled.View`
`

const CurrentVideoTO = styled.TouchableOpacity`
`
const CarouselBackgroundView = styled.View`
  background-color:white;
  height: 200;
  width: ${width};
`