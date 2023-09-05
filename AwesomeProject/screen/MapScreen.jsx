import React, { useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GlobalStyles } from "../GlobalStyles";

const MapScreen = ({ route }) => {
  console.log("route.params.location", route.params.location);
  const { latitude, longitude, latitudeDelta, longitudeDelta } =
    route.params.location;
  
    
  return (
    <View style={GlobalStyles.container}>
      {/* <Text>Map</Text> */}
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude,
          longitude,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="travel photo" />
      </MapView>
    </View>
  );
};

styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default MapScreen;
