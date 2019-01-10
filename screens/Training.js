import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class Training extends Component{

    constructor(props) {
        super(props);
    

        //tutaj trzeba wprowadzic odczyty
        this.state = {
           
            result: {
                date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                distance: '6000',
                calories: '1500',
                time: '4000'
            }
        }
    
    }

    goToScreen = (screenName, result) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
                passProps: {
                    result: result
                },
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

                    {/* tutaj powinno wypisywac te dane w czasie treningu i po nacisnieciu przycisku konczy trening i przesyla dane dalej */}

                    <Text style={styles.resultText}>Time: {this.state.result.time}</Text>
                    <Text style={styles.resultText}>Distance: {this.state.result.distance}</Text>
                    <Text style={styles.resultText}>Calories: {this.state.result.calories}</Text>
                    
                    <TouchableOpacity style={styles.saveBtn} onPress={()=> this.goToScreen('Result', this.state.result)}>
                        <Text style={styles.saveBtnTxt}>Finish Training</Text>
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
    btn: {
        borderWidth: 1,
        width: '35%',
        padding: 5,
        marginTop: '10%',
        borderRadius: 5
    }, 
    resultText: {
        fontSize: 32,
        fontFamily: 'Lato-Regular'
    },
    saveBtn: {
        borderWidth: 1,
        width: '60%',
        padding: '2%',
        marginTop: '10%',
        borderRadius: 5
    },
    saveBtnTxt: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Lato-Bold'
    },
});