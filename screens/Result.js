import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import _ from 'lodash';
import SQLite from 'react-native-sqlite-storage'
import LinearGradient from 'react-native-linear-gradient';

var db = SQLite.openDatabase({name: 'md.db', createFromLocation: '~www/md.db'});



export default class Result extends Component{

  

    constructor(props) {
        super(props);

       
        
        this.state = {
            minPulse: '',
            maxPulse: '',
            avgPulse: '',
            training: this.props.result
        }
    
    }

    addTrainingToDatabase(){

        minPulse= _.min(this.state.training.pulse);
        maxPulse= _.max(this.state.training.pulse);
        avgPulse= _.round(_.mean(this.state.training.pulse));
   
        db.transaction((tx) => {
    
            let query = `INSERT INTO trainings (date, distance, calories, minPulse, maxPulse, avgPulse, time) 
                        VALUES (
                            '${this.state.training.date}',
                            '${this.state.training.distance}',
                            '${this.state.training.calories}',
                            '${minPulse}',
                            '${maxPulse}',
                            '${avgPulse}',
                            '${this.state.training.time}')`;
    
            db.executeSql(query);
    
          });
    
        
        this.goToScreen('HomePage')
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
                
                    <Text style={styles.bigResultText}>Your result:</Text>
                    <Text style={styles.resultTextDate}>{this.state.training.date}</Text>
                    <Text style={styles.resultText}>Calories: {this.state.training.calories}</Text>
                    <Text style={styles.resultText}>Distance: {this.state.training.distance} m </Text>
                    <Text style={styles.resultText}>
                        Min/Avg/Max Pulse: {_.min(this.state.training.pulse)}/{_.round(_.mean(this.state.training.pulse))}/{_.max(this.state.training.pulse)}
                    </Text>
          
                    <Text style={styles.resultText}>Time: {this.state.training.time} s</Text>
                    

                    <TouchableOpacity style={styles.btn} 
                                onPress={()=> this.addTrainingToDatabase()} >
                        <Text style={styles.btnTxt}>Save result</Text>
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
        justifyContent: 'space-around',
        alignItems: 'center' 
    },
    btn: {
        borderWidth: 1,
        width: '40%',
        padding: '3%',
        // marginTop: '10%',
        borderRadius: 5
      },
    btnTxt: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Lato-Bold'
    },
    bigResultText: {
        fontSize: 48,
        fontFamily: 'Lato-Bold',
        // marginBottom: '2%'
    },
    resultText: {
        fontSize: 20,
        fontFamily: 'Lato-Regular'
    },
    resultTextDate: {
        fontSize: 32,
        fontFamily: 'Lato-Regular'
    },
});