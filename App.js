import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SQLite from 'react-native-sqlite-storage';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends Component {

    constructor() {
        super();
    
        this.state = {
          
        }
    
    }

    async componentDidMount() {

        SplashScreen.hide();

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
    // <LinearGradient colors={['#A6fcd2','#Afd5f6']} style={styles.linearGradient}>
    <LinearGradient colors={['#4facfe','#00f2fe']} style={styles.linearGradient}>


      <View style={styles.container}>

          <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('TrainingHistory')}>
              <Text style={styles.btnTxt}>Historia Treningowa</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('TrainingStart')}>
              <Text style={styles.btnTxt}>Trening</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('CalculatorBMI')}>
              <Text style={styles.btnTxt}>Liczenie BMI</Text>
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
        padding: 15,
        borderWidth: 1,
        width: '95%',
        margin: 10,
        borderRadius: 15   
    },
    btnTxt: {
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        textAlign: 'center' 
    },
});