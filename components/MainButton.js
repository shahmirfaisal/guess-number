import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View
        style={{
          ...styles.button,
          ...props.buttonStyle,
          backgroundColor: props.color || Colors.primary,
        }}
      >
        <Text style={{ ...styles.text, ...props.textStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "white",
  },
});

export { MainButton };
