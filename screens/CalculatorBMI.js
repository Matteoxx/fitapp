import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class CalculatorBMI extends Component{
    calcBMI = 0;
    constructor (props){
        super(props);
        this.state = {
            waga: '',
            wzrost: ''
        };
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
            },
            passProps:{
                calcBMI: this.calcBMI
            }
        })
    }

    calculationBMI(weight, height){
        weight = this.state.waga;
        height = this.state.wzrost;
        this.calcBMI = weight/(height*height);
        this.calcBMI = this.calcBMI * 10000;
        this.calcBMI = this.calcBMI.toFixed(2);
        return this.calcBMI;
    }

    checkYourBMI(){
        if(this.calcBMI < 16){
            return 'wygłodzenie';
        }else if (this.calcBMI <= 16.99 && this.calcBMI >= 16){
            return 'wychudzenie';
        }else if (this.calcBMI <= 18.49 && this.calcBMI >= 17){
            return 'niedowaga';
        }else if (this.calcBMI <= 24.49 && this.calcBMI >= 18.5){
            return 'wartość prawidłowa';
        }else if (this.calcBMI <= 29.99 && this.calcBMI >= 25){
            return 'nadwaga';
        }else if (this.calcBMI <= 34.99 && this.calcBMI >= 30){
            return 'I stopień otyłości';
        }else if (this.calcBMI <= 39.99 && this.calcBMI >= 35){
            return 'II stopień otyłości';
        }else if ( this.calcBMI >= 40){
            return 'otyłość skrajna';
        }
    }
    render() {
        return (
            <LinearGradient colors={['#4facfe','#00f2fe']} style={styles.linearGradient}>

                <View style={styles.container}>
        
                    <Text style={styles.normalTxt}>Oblicz swoje BMI</Text>

                    <TextInput style={styles.textInput} placeholder="Wprowadź swoją wagę [kg]"
                               onChangeText={(text) => this.setState({
                                   waga: text
                               })}
                    />
                    <TextInput style={styles.textInput} placeholder="Wprowadź swój wzrost [cm]"
                               onChangeText={(text) => this.setState({
                                   wzrost: text
                               })}
                    />
                    <TouchableOpacity style={styles.saveBtn} onPress={()=>this.calculationBMI()}>
                        <Text style={styles.saveBtnTxt } > Oblicz </Text>
                    </TouchableOpacity>

                    <Text style={styles.normalTxt}> Twoje BMI wynosi:</Text>
                    <Text style={styles.calcTxt}> {this.calculationBMI(this.calcBMI)}</Text>
                    <Text style={styles.calcTxt}> {this.checkYourBMI()}</Text>

                
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
        //justifyContent: 'center',
        alignItems: 'center' 
    },
    textInput: {
         padding: 5,
        marginTop: '5%',
        width: '75%',
        borderWidth: 1,
        fontSize: 20,
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
        marginTop: '5%',
        borderRadius: 5
    },
    normalTxt: {
        marginTop: '10%',
        fontSize: 20,
        textAlign: 'center'
    },
    calcTxt:{
        marginTop: '5%',
        fontSize: 35,
        textAlign: 'center'
    }

});