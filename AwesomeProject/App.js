// import "react-native-gesture-handler";
import { useFonts } from "expo-font";

import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Main from "./Components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
