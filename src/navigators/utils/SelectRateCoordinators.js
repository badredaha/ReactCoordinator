
import { Button, Text } from 'react-native';
import { Coordinator } from './Coordinators';

export class SelectRateCoordinators extends Coordinator {
  constructor(navigation) {
    super();
    this.navigation = navigation
  }

  //TODO: One Way From A to Z
  start() {
    super.start();
    console.log("navigation",this.navigation);
    this.navigation.navigate("Member")
  }

  //Navigation LifeCycle

  //TODO: One Way From Z to A
  finish(coordinator) {
   this.child.find(coordinator)

  }
}
