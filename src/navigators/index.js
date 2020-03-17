import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeStack} from './HomeStack';
import {ProfileStack} from './ProfileStack';
import Screens from '../screens';

const TabBarNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Profile: ProfileStack,
  Settings: Screens.Settings,
});

export default createAppContainer(TabBarNavigator);
