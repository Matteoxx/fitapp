import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import SQLite from 'react-native-sqlite-storage'
 
var db = SQLite.openDatabase({name: 'md.db', createFromLocation: '~www/md.db'});

export default class Drawer extends Component {
  
  constructor() {
    super();

    this.state = {
      dane: []
    }

  }

  componentDidMount() {
   
  }  

  goToScreen = (screenName, testName, testId, numberOfTasks) => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })
    Navigation.push('MAIN_STACK',{
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: screenName
            }
          }
        },
        passProps: {
          testToSolveName: testName,
          testToSolveId: testId,
          numberOfTasks: numberOfTasks 
        }
      }
    })
  }



  render() {

        let rows = [];
        for (let i = 0; i < this.state.dane.length; i++) {
            rows.push(
              <TouchableOpacity style={styles.tile} onPress={()=> this.goToScreen('Test', this.state.dane[i].name, this.state.dane[i].id, this.state.dane[i].numberOfTasks)}>
                <Text style={styles.tileText}>{this.state.dane[i].name}</Text>
              </TouchableOpacity>    
  
            )
        }
    return (

      <LinearGradient colors={['#A6fcd2','#Afd5f6']} style={styles.linearGradient}>

        <View style={styles.container}>

            <TouchableOpacity  style={styles.btnTitle} onPress={()=> this.goToScreen('HomePage')}>
              <Text style={styles.title}>FitApp</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('TrainingHistory')}>
                <Text style={styles.btnTxt}>Historia Treningowa</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('TrainingStart')}>
                <Text style={styles.btnTxt}>Trening</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('CalculatorBMI')}>
                <Text style={styles.btnTxt}>Liczenie BMI</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn} onPress={()=> this.goToScreen('CheckPulse')}>
                <Text style={styles.btnTxt}>Sprawdź puls</Text>
            </TouchableOpacity>
          
            {rows}

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
    alignItems: 'center',
  },
  tileText: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Lato-Bold'
  },
  btnTitle: {
    margin: 10,
    borderRadius: 15   
  },
  title: {
    textAlign: 'center',
    fontSize: 64,
    marginBottom: 20,
    fontFamily: 'BreeSerif-Regular'
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