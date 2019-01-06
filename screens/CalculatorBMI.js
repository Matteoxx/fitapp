import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

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
            <LinearGradient colors={['#4facfe','#00f2fe']} style={styles.linearGradient}>

                <View style={styles.container}>
        
                        <Text>Liczenie BMI</Text>
                
                </View>
                
            </LinearGradient>
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