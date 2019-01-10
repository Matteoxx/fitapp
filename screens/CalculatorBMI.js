import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

export default class CalculatorBMI extends Component{

    constructor (props){
        super(props);
        this.state = {
            weight: '',
            height: '',
            bmiResult: '',
            bmiDesc: ''
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
            }
        })
    }

    calculateBMI(weight, height){

        if(weight === '' || height === ''){
            alert('Wprowadź wszystkie dane!');
        } else {

            calcBMI = _.round((weight/(height*height))* 10000, 2);

            if(calcBMI < 16){
                calcDesc = 'wygłodzenie';
            }else if (calcBMI <= 16.99 && calcBMI >= 16){
                calcDesc = 'wychudzenie';
            }else if (calcBMI <= 18.49 && calcBMI >= 17){
                calcDesc = 'niedowaga';
            }else if (calcBMI <= 24.49 && calcBMI >= 18.5){
                calcDesc = 'wartość prawidłowa';
            }else if (calcBMI <= 29.99 && calcBMI >= 25){
                calcDesc = 'nadwaga';
            }else if (calcBMI <= 34.99 && calcBMI >= 30){
                calcDesc = 'I stopień otyłości';
            }else if (calcBMI <= 39.99 && calcBMI >= 35){
                calcDesc = 'II stopień otyłości';
            }else if ( calcBMI >= 40){
                calcDesc = 'otyłość skrajna';
            }
    
            this.setState({
                bmiResult: calcBMI,
                bmiDesc: calcDesc
            })
        }

    }


    render() {
        return (
            <LinearGradient colors={['#4facfe','#00f2fe']} style={styles.linearGradient}>

                <View style={styles.container}>
        
                    <Text style={styles.normalTxt}>Oblicz swoje BMI</Text>

                    <TextInput style={styles.textInput} placeholder="Wprowadź swoją wagę [kg]"
                               onChangeText={(text) => this.setState({
                                weight: text
                               })}
                    />
                    <TextInput style={styles.textInput} placeholder="Wprowadź swój wzrost [cm]"
                               onChangeText={(text) => this.setState({
                                height: text
                               })}
                    />
                    <TouchableOpacity style={styles.saveBtn} onPress={()=>this.calculateBMI(this.state.weight, this.state.height)}>
                        <Text style={styles.saveBtnTxt } > Oblicz </Text>
                    </TouchableOpacity>

                    <Text style={styles.normalTxt}> Twoje BMI wynosi:</Text>
                    <Text style={styles.calcTxt}> {this.state.bmiResult}</Text>
                    <Text style={styles.calcTxt}> {this.state.bmiDesc}</Text>

                
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