/** @format */

import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import General from "../data/General";
import WelcomeCard from "../cards/WelcomeCard";

const { width, height } = Dimensions.get("window");

const Pagination = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.page} />
      <View style={styles.page} />
      <View style={styles.page} />
    </View>
  );
};

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text>dELETE ME LATER</Text>
      <View style={styles.welcomeList}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          pagingEnabled
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Pagination />
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.buttontext}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#CEE8E7",
    borderRadius: 32,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttontext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width / 1.2,
    alignItems: "center",
    marginTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageContainer: {
    flexDirection: "row",
  },
  page: {
    height: 8,
    width: 15,
    borderRadius: 32,
    backgroundColor: "#0A8791",
    marginHorizontal: 5,
  },
  welcomeList: {
    height: height / 2,
  },
});

export default WelcomeScreen;
