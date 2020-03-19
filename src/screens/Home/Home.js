import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

export class Home extends React.Component {
  _navigateToSelectRate = () => {
    const {navigation} = this.props;
    navigation.navigate('SelectRateCoordinator');


  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button
          title="Go to Select Rate"
          color="black"
          onPress={this._navigateToSelectRate}
        />
      </View>
    );
  }
}
