import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class ResultCalculatorBMI extends Component{
    constructor (props){
        super(props);
    }
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

                    <Text style={styles.resultText}>Twój wynik to: </Text>
                    <Text style={styles.pointsTxt}>{this.props.calcBMI} </Text>

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
    textInput: {
        padding: 10,
        marginTop: '10%',
        width: '75%',
        borderWidth: 1,
        fontSize: 24,
        textAlign: 'center',
        borderRadius: 5
    },
    saveBtnTxt: {
        fontSize: 24,
        textAlign: 'center'
    },
    saveBtn: {
        borderWidth: 1,
        width: '40%',
        padding: 5,
        marginTop: '10%',
        borderRadius: 5
    },
    pointsTxt: {
        marginTop: '7%',
        fontSize: 82,
        textAlign: 'center'
    },

});