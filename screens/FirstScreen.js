import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class FirstScreen extends Component{
  

    render() {
        return (
            <View style={styles.container}>
              
                    <Text>Wynik treningu</Text>
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});