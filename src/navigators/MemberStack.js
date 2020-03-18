import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

export const MemberStack = createStackNavigator({
  Member: Screens.Member,
  ProfileMember: Screens.Profile,
},);
