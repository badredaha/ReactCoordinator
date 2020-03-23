import * as React from 'react';
import { Member } from '../Member/Member';
import { NoMember } from '../NoMember/NoMember';
import { CoordinatorSwitch } from '../../navigators/utils/CoordinateurSwitch';

export class SelectRateSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'Memberi'
    }
  }

  _goToMember = () => {
    console.log('_goToMember')
    this.setState({
      currentScreen: 'Memberi'
    })
  };

  _goToNoMember = () => {
    console.log('_goToNoMember')
    this.setState({
      currentScreen: 'NoMemberi'
    })
  };


  render() {
    const { navigation } = this.props;
    const { currentScreen } = this.state;
    return (
      <CoordinatorSwitch {...{ currentScreen }}>
        <Member id="Memberi" onTapMember={this._goToMember} onTapNoMember={this._goToNoMember}/>
        <NoMember id="NoMemberi" onTapMember={this._goToMember} onTapNoMember={this._goToNoMember} />
      </CoordinatorSwitch>
    );
  }
}
