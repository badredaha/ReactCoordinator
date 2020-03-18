import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeStack} from './HomeStack';
import { SelectRateStack } from './SelectRateStack';

const TabBarNavigator = createBottomTabNavigator({
  Home: HomeStack,
  SelectRateSwitch: SelectRateStack,
  // Settings: Screens.Settings,
});

export default createAppContainer(TabBarNavigator);
