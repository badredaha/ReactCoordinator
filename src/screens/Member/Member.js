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
    return (
      <View key={index}>
        <Text style={{fontSize: 14}}>{item.title}</Text>
        <Button
          style={{ fontSize: 10 }}
          title="View"
          color="black"
          onPress={this._navigateToProfileMember}
        />
      </View>
    );
  };

  _navigateToProfileMember = () => {
    const { navigation } = this.props;
    navigation.navigate('ProfileMember')
  }

  _navigateToNoMember = () => {
    const { navigation } = this.props;
    navigation.navigate('NoMemberi')
  }

  render() {
    const {data} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <Button
            title="Member"
            color="white"
            onPress={this._navigateToMember}
          />
          <Button
            title="No Member"
            color="white"
            onPress={this._navigateToNoMember}
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
