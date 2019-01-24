import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import haversine from "haversine";

const LATITUDE = 50.016241;
const LONGITUDE = 20.990436;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class Training extends Component{

    constructor(props) {
        super(props);
        //tutaj trzeba wprowadzic odczyty
        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE
            })
        };
    
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
    };

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {},
            error => alert(error.message),
            {
                enableHighAccuracy: true,
                timeout: 2000,
                maximumAge: 1000
            }
        );
    }

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { coordinate, routeCoordinates, distanceTravelled } =   this.state;
                const { latitude, longitude } = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };
                if (Platform.OS === "android") {
                    if (this.marker) {
                        this.marker._component.animateMarkerToCoordinate(
                            newCoordinate,
                            500
                        );
                    }
                } else {
                    coordinate.timing(newCoordinate).start();
                }
                this.setState({
                    latitude,
                    longitude,
                    routeCoordinates: routeCoordinates.concat([newCoordinate]),
                    distanceTravelled:
                        distanceTravelled + this.calcDistance(newCoordinate),
                    prevLatLng: newCoordinate
                });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation = {true}
                    followsUserLocation = {true}
                    loadingEnabled={true}
                    showsCompass={false}
                    region={this.getMapRegion()}
                >
                    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                    <Marker.Animated
                        ref={marker => {
                            this.marker = marker;
                        }}
                        coordinate={this.state.coordinate} />
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.bubble, styles.button]}>
                        <Text style={styles.bottomBarContent}>
                            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    latlng: {
        width: 200,
        alignItems: "stretch"
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
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