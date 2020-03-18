import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

export const NoMemberStack = createStackNavigator({
  NoMember: Screens.NoMember,
  ProfileNoMember: Screens.Profile,
});
