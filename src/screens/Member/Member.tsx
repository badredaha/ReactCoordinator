import * as React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {styles} from './styles';

export class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: 'PRBA'},
        {id: 2, title: 'PRPP'},
        {id: 3, title: 'LHYG'},
      ],
    };
  }

  _renderItem = ({item, index}) => {
    const { onTapOnBookingPayment } = this.props;
    return (
      <View key={index}>
        <Text style={{fontSize: 14}}>{item.title}</Text>
        <Button
          title="Go To Booking Payment"
          color="white"
          onPress={this._onTapOnBookingPayment}
        />
      </View>
    );
  };

  _onTapOnBookingPayment = () => {
    const { navigation } = this.props;
    navigation.navigate('BookingPayment')
  }


  render() {
    const {data} = this.state;
    const {onTapMember, onTapNoMember} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <Button
            title="Member"
            color="white"
            onPress={onTapMember}
          />
          <Button
            title="No Member"
            color="white"
            onPress={onTapNoMember}
          />
        </View>
        <Text style={styles.title}>Member</Text>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
