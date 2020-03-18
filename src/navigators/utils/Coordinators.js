// export function Coordinator(props) {
//   const {currentScreen, children} = props;
//   return children.find(screen => screen.props.id === currentScreen);
// }

export class Coordinator {
  child = [];
  parentCoordinator = null;
  navigation = null;

  start() {}
  finish() {}
}
