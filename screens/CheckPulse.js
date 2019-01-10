import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class CheckPulse extends Component{
  
    constructor() {
        super();
    
        this.state = {
          pulse: ''
        }
    
    }

    render() {
        return (
            <LinearGradient colors={['#4facfe','#00f2fe']} style={styles.linearGradient}>
                <View style={styles.container}>

                    <Text>Sprawdz puls:</Text>
                    <Text style={styles.resultText}>Pulse: {this.state.currentPulse}</Text>
                    
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
    }
});