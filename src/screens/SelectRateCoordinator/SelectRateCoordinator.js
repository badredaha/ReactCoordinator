import * as React from 'react';
import {Coordinator} from '../../navigators/utils/Coordinators';
import Screens from '../';

export class SelectRateCoordinator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'member',
    };
  }

  _goToNoMember = () => {
    this.setState({
      currentScreen: 'noMember',
    });
  };

  _goToMember = () => {
    this.setState({
      currentScreen: 'member',
    });
  };



  render() {
    const { navigation } = this.props;
    const {currentScreen} = this.state;
    return (
      <Coordinator {...{currentScreen}}>
        <Screens.Member id={'member'} onTapNoMember={this._goToNoMember} navigation={navigation}/>
        <Screens.NonMember id={'noMember'} onTapMember={this._goToMember}  navigation={navigation}/>
      </Coordinator>
    );
  }
}
