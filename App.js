import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";

import HomeScreen from "./src/HomeScreen/index.js";
export default class AwesomeApp extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    render() {
        return <HomeScreen />;
    }
}