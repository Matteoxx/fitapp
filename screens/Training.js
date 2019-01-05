import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';


export default class Training extends Component{
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
              
              <TouchableOpacity style={styles.btn} onPress={()=> this.goToScreen('Result')}>
                <Text>Finish Training</Text>
              </TouchableOpacity>
              
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
    btn: {
        borderWidth: 1,
        width: '35%',
        padding: 5,
        marginTop: '10%',
        borderRadius: 5
    },
    btnTxt: {
        fontSize: 20,
        textAlign: 'center'
    },
});