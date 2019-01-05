import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';


export default class Result extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          training: {}
        }
    
    }

    addTrainingToDatabase(){

        db.transaction((tx) => {
    
            let query = `INSERT INTO trainings (date, distance, minPulse, maxPulse, avgPulse, timescale) 
                        VALUES (
                            '${training.date}',
                            '${training.distance}',
                            '${training.minPulse}',
                            '${training.maxPulse}',
                            '${training.avgPulse}',
                            '${training.timescale}')`;
    
            db.executeSql(query);
    
          });
    
        //   this.goToScreen('App')
        
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
            <View style={styles.container}>
              
                <Text>Wynik treningu:</Text>
                <Text>Distance: </Text>
                <Text>Pulse:</Text>
                <Text>Timescale:</Text>

                <TouchableOpacity style={styles.btn} 
                              onPress={()=> this.addTrainingToDatabase()} >
                    <Text style={styles.btnTxt}>Save training result</Text>
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