
import { NavigationParams } from 'react-navigation';

export interface ICoordinator{
    child?:[ICoordinator?];
    parentCoordintor?: ICoordinator;

    navigation:NavigationParams

    start(): void;
    end(child?: ICoordinator): void;

}