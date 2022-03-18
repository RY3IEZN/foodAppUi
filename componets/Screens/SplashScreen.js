/** @format */

import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Image source={require("../../assets/plate.png")} style={styles.image} />
      <Text style={styles.title}> FooDelivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A8791",
  },
  image: {
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

export default SplashScreen;
