import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";

export default function IdealMaps() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -31.331976,
          longitude: -54.071855,
          latitudeDelta: 0.1234,
          longitudeDelta: 0.1234,
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
        <Marker
          coordinate={{
            latitude: -31.375631,
            longitude: -54.104999,
          }}
          title={"Ideal"}
          description={"Instituição"}
        ></Marker>
        <Marker
          coordinate={{
            latitude: -31.306217,
            longitude: -54.064696,
          }}
          title={"Unipampa - Campus Bagé"}
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
