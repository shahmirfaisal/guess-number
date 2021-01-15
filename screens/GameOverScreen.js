import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import { RegularText, BoldText, MainButton } from "../components/index";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BoldText style={styles.title}>Game is Over</BoldText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>

      <RegularText style={styles.resultText}>
        Your phone needed{" "}
        <BoldText style={styles.highlight}>{props.rounds}</BoldText> rounds to
        guess the number{" "}
        <BoldText style={styles.highlight}>{props.userNumber}</BoldText>.
      </RegularText>

      <MainButton buttonStyle={styles.button} onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  imageContainer: {
    width: 250,
    height: 250,
    overflow: "hidden",
    borderRadius: 125,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 22,
  },
  button: {
    marginTop: 20,
  },
  highlight: {
    color: Colors.secondary,
  },
  resultText: {
    marginHorizontal: 20,
    textAlign: "center",
  },
});

export { GameOverScreen };
