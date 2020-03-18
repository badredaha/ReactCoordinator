import * as React from 'react';
import {Coordinator} from '../../navigators/utils/Coordinators';
import Screens from '../';
import { SelectRateCoordinators } from '../../navigators/utils/SelectRateCoordinators';
import { Button, View } from 'react-native';

export class SelectRate extends React.Component {
  seletRateCoordinator = null;
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'member',
    };
    const {navigation} = this.props;
    this.seletRateCoordinator = new SelectRateCoordinators(navigation)
  }

  _goToNoMember = () => {
    this.setState({
      currentScreen: 'noMember',
    });
  };

  _goToMember = () => {
    this.seletRateCoordinator.start()
  };

  render() {
    const {currentScreen} = this.state;
    return (
      <>
      <Button
        title="Go Member"
        color="green"
        onPress={this._goToMember}
      />
        <Button
          title="Go No Member"
          color="blue"
          onPress={this._goToNoMember}
        />
      </>

    );
  }
}
