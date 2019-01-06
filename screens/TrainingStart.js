import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class TrainingStart extends Component{
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
                 
                    <TouchableOpacity  
                      
                        style = {{
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                            width: Dimensions.get('window').width * 0.5,
                            height: Dimensions.get('window').width * 0.5,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={()=> this.goToScreen('Training')}
                        >

                        <Text style={styles.btnTxt}>Start Training</Text>
                    
                    </TouchableOpacity> 

                    
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
    btnTxt: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Lato-Bold'
    }
});