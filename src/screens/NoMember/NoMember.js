import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import {styles} from './styles';

export class NoMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: 'Rate 1'},
        {id: 2, title: 'Rate 2'},
        {id: 3, title: 'Rate 3'},
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <Text style={{fontSize: 14}}>{item.title}</Text>
      </View>
    );
  };
  render() {
    const { data } = this.state;
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
        <Text style={styles.title}>No Member</Text>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
