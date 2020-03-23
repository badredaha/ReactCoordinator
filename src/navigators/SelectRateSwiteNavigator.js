import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {MemberStack} from './MemberStack'
import {NoMemberStack} from './NoMemberStack'

export const SelectRateSwitchNavigator = createAppContainer(createSwitchNavigator({
    Memberi: {
      screen: MemberStack
    },
    NoMemberi: {
      screen: NoMemberStack
    },
  },
  {
    initialRouteName: 'Memberi'
  }
));
