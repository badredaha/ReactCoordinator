import * as React from 'react';
import { View, Text } from "react-native";
import Screens from '../';

import {styles} from './styles'

export class SelectRateView extends React.Component {
  constructor(props) {
    super(props);
     
  }

  _goToNoMember = () => {
    const { navigation } = this.props;
  };

  _goToMember = () => {
    const { navigation } = this.props;
  };

  render() {


    return (
      <View>
        <Screens.Member id={'member'} style={styles.container}/>
      </View>
    );
  }
}
