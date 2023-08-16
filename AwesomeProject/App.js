import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Switch,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";

import BgImage from "./image/background.jpg";

import RegistrationScreen from "./screen/RegistrationScreen";
import LoginScreen from "./screen/LoginScreen";

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
    <>
      <StatusBar style="auto" />
      <RegistrationScreen />
      {/* <LoginScreen /> */}

      {/* <Text style={myStyles.titleWithStyles}>This is "Text" component before "View" component</Text>
      <View style={myStyles.container}>
        <Text style={myStyles.title}>This "Text" is inside "View" component</Text>
        <Button title="This is button" />
      </View>
      <ScrollView>
        <Text>This is ScrollView</Text>
        <TextInput placeholder="Enter something" />
        <Switch title="CheckBox" />
        <Image source={require('./avka_more_light.jpg')} style={{ width: 150, height: 150 }} />
      </ScrollView> */}

      {/* <View style={myStyles.container}>
         <Text>Hello World! This is my first project in Android Sutdio!</Text>
         <StatusBar style="auto" />
        
      </View> */}
    </>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  titleWithStyles: {
    paddingVertical: Platform.OS === "ios" ? 8 : 10,
    textAlign: "center",
    borderWidth: 4,
    ...Platform.select({
      ios: { borderColor: "yellow" },
      android: { borderColor: "red" },
    }),
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
  },
  bgImg: { flex: 1 },
});
