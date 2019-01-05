import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class CalculatorBMI extends Component{
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
                options: {
                    topBar: {
                        title: {
                            text: screenName
                        }
                    }
                }
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
       
                    <Text>Liczenie BMI</Text>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btn: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 4,
        borderColor: 'black',
        borderStyle: 'solid',
        width: '95%',
        margin: 10,
        backgroundColor: 'deepskyblue',
        alignItems: 'center',
        borderRadius: 15
    },
});