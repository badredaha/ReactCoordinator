import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

export const HomeStack = createStackNavigator({
  Home: Screens.Home,
  SelectRate: Screens.SelectRate,
  ListResort: Screens.ListResort,
});
