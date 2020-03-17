import * as React from 'react';
import {Coordinator} from '../../navigators/utils/Coordinators';
import Screens from '../';

export class SelectRate extends React.Component {
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
    const {currentScreen} = this.state;
    return (
      <Coordinator {...{currentScreen}}>
        <Screens.Member id="member" onTapMember={this._goToMember} onTapNoMember={this._goToNoMember}/>
        <Screens.NonMember id="noMember" onTapMember={this._goToMember} onTapNoMember={this._goToNoMember} />
      </Coordinator>
    );
  }
}
