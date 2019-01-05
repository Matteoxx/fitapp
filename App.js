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
    <LinearGradient colors={['#A6fcd2','#Afd5f6']} style={styles.linearGradient}>

      <View style={styles.container}>

          <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('TrainingHistory')}>
              <Text>Historia Treningowa</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('TrainingStart')}>
              <Text>Trening</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('CalculatorBMI')}>
              <Text>Liczenie BMI</Text>
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