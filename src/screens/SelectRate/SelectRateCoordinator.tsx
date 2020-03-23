import { ICoordinator } from "../../navigators/Coordinator/ICoordinator";
import { NavigationParams, NavigationContainer } from "react-navigation";


export class SelectRateCoordinator implements  ICoordinator{
    
    child?: [ICoordinator?];
    parentCoordintor?: ICoordinator;
    navigation: NavigationParams;

    constructor(navigation) {
       this.navigation = navigation
    }
    
    start(): void {
        this.navigation.navigate("SelectRateView")
    }
   
    end(child?: ICoordinator): void {
        
    }


    




}