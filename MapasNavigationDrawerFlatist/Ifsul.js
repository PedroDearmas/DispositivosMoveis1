import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";

export default function IfsulMaps() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -31.3302738,
          longitude: -54.0719644,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -31.331976,
            longitude: -54.071855,
          }}
          title={"IFSUL - Campus Bagé"}
          description={"Instituição"}
        ></Marker>
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
