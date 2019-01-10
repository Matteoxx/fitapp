import {Navigation} from "react-native-navigation";
// import App from './App';
import HomePage from './screens/HomePage';

import TrainingHistory from './screens/TrainingHistory';
import TrainingStart from './screens/TrainingStart';
import Training from './screens/Training';
import CalculatorBMI from './screens/CalculatorBMI';
import FirstScreen from './screens/FirstScreen';
import Result from './screens/Result';
import ResultCalculatorBMI from './screens/ResultCalculatorBMI';
import CheckPulse from './screens/CheckPulse';
import Drawer from './screens/Drawer';


import { Dimensions } from 'react-native';

// Navigation.registerComponent(`HomePage`, () => App);
Navigation.registerComponent(`HomePage`, () => HomePage);
Navigation.registerComponent(`TrainingHistory`, () => TrainingHistory);
Navigation.registerComponent(`TrainingStart`, () => TrainingStart);
Navigation.registerComponent(`Training`, () => Training);
Navigation.registerComponent(`CalculatorBMI`, () => CalculatorBMI);
Navigation.registerComponent(`FirstScreen`, () => FirstScreen);
Navigation.registerComponent(`Result`, () => Result);
Navigation.registerComponent(`ResultCalculatorBMI`, () => ResultCalculatorBMI);
Navigation.registerComponent(`CheckPulse`, () => CheckPulse);
Navigation.registerComponent(`Drawer`, () => Drawer);


const { width } = Dimensions.get('window');

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        id: 'drawerId',
                        name: 'Drawer',
                        fixedWidth: width
                    }
                },
                center: {
                    stack: {
                        id: 'MAIN_STACK',
                        children: [
                            {
                                component: {
                                    name: 'HomePage',
                                    options: {
                                        topBar: {
                                            title: {
                                                text: "Home Page"
                                            }
                                        }
                                    }
                                }
                            },
                        ]
                    }
                }
            },
        }
    });
});