import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

export const ProfileStack = createStackNavigator({
  Profile: Screens.Profile,
  Login: Screens.Login,
});
