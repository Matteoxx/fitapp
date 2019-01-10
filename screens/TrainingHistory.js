import React, {Component} from 'react';
import {ListView, StyleSheet, Text, View, ActivityIndicator, RefreshControl} from 'react-native';
import { Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import SQLite from 'react-native-sqlite-storage'
 
var db = SQLite.openDatabase({name: 'md.db', createFromLocation: '~www/md.db'});
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TrainingHistory extends Component{

    constructor() {
        super();
    
        this.state = {
          trainings: ds,
          refreshing: false,
          isLoading: true
        }
    
    }

    downloadDataFromDatabase = (db) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM trainings;', [], (tx, results) => {
                var trainings = [];
                for (let i = 0; i < results.rows.length; i++) {
                    trainings[i] = results.rows.item(i);
                }
                this.setState({
                    isLoading: false,
                    trainings: ds.cloneWithRows(trainings)
                });
            });
        });
    }
    
    componentDidMount() {
        this.downloadDataFromDatabase(db);
    }

    _renderRow(rowData){
        return (
          
            // trzeba zrobic jeszcze nazwy kolumn na samej górze
            
          <View style={styles.row}>

            <View style={styles.col}><Text style={styles.text}>{rowData.date}</Text></View>
            <View style={styles.col}><Text style={styles.text}>{rowData.distance}</Text></View>
            <View style={styles.col}><Text style={styles.text}>{rowData.calories}</Text></View>
            <View style={styles.col}><Text style={styles.text}>{rowData.time}</Text></View>


          </View>   
          
        );
      }

    render() {

        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }

        return (
            <LinearGradient colors={['#4facfe','#00f2fe']} style={styles.linearGradient}>            
                <View style={styles.container}>
                    
                    <ListView 
                        style={styles.table} 
                        dataSource={this.state.trainings}
                        renderRow={this._renderRow}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    />
            
                    
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
        paddingTop: '2%'
      },
      row: {
        flex: 1,
        flexDirection: 'row',
      },
      col: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        // width: '16%'
      },
      text: {
        textAlign: 'center',
        padding: '2%',
        fontFamily: 'Lato-Regular'
      }
});