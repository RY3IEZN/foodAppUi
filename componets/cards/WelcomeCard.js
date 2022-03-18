/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import WELCOME_CONTENTS from "../data/General";
import General from "../data/General";

function WelcomeCard({ title, content, image, item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.contentitle}>{content}</Text>
      <Image />
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  contentitle: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default WelcomeCard;
