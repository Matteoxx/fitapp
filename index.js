import {Navigation} from "react-native-navigation";
import App from './App';
import TrainingHistory from './screens/TrainingHistory';
import TrainingStart from './screens/TrainingStart';
import Training from './screens/Training';
import CalculatorBMI from './screens/CalculatorBMI';
import FirstScreen from './screens/FirstScreen';
import Result from './screens/Result';


Navigation.registerComponent(`App`, () => App);
Navigation.registerComponent(`TrainingHistory`, () => TrainingHistory);
Navigation.registerComponent(`TrainingStart`, () => TrainingStart);
Navigation.registerComponent(`Training`, () => Training);
Navigation.registerComponent(`CalculatorBMI`, () => CalculatorBMI);
Navigation.registerComponent(`FirstScreen`, () => FirstScreen);
Navigation.registerComponent(`Result`, () => Result);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            sideMenu: {
                // left: {
                //     component: {
                //         id: 'drawerId',
                //         name: 'Drawer',
                //         fixedWidth: width
                //     }
                // },
                center: {
                    stack: {
                        id: 'MAIN_STACK',
                        children: [
                            {
                                component: {
                                    name: 'App',
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