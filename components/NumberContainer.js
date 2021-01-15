import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { BoldText } from "./BoldText";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <BoldText style={styles.text}>{props.children}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.secondary,
    fontSize: 22,
  },
});

export { NumberContainer };
