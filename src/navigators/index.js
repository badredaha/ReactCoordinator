import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeStack} from './HomeStack';
import {SelectRateSwitchNavigator} from './SelectRateSwiteNavigator';
import { SelectRateStack } from './SelectRateStack';

const TabBarNavigator = createBottomTabNavigator({
  Home: HomeStack,
  // SelectRateSwitch: SelectRateStack,
  SelectRateSwitch: SelectRateSwitchNavigator,
  // Settings: Screens.Settings,
});

export default createAppContainer(TabBarNavigator);
