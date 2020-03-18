import {createStackNavigator} from 'react-navigation-stack';
import {SelectRateSwitchNavigator} from './SelectRateSwiteNavigator';

export const SelectRateStack = createStackNavigator({
  SelectRate: SelectRateSwitchNavigator,
},);
