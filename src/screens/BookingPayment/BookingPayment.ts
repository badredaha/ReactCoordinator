import * as React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export class BookingPayment extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Booking Payment</Text>
      </View>
    );
  }
}
