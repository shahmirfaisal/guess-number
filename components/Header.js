import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { BoldText } from "./index";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <BoldText style={styles.text}>{props.title}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    width: "100%",
    height: 100,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 25,
  },
});

export { Header };
