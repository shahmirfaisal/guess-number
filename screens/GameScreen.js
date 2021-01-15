import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import {
  RegularText,
  Card,
  NumberContainer,
  MainButton,
} from "../components/index";
import { Ionicons } from "@expo/vector-icons";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) return generateRandomNumber(min, max, exclude);
  else return randomNumber;
};

const renderListItem = (guess, index, numberOfRound) => (
  <View key={index} style={styles.listItem}>
    <RegularText>#{numberOfRound}</RegularText>
    <RegularText>{guess}</RegularText>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentMax = useRef(100);
  const currentMin = useRef(1);

  useEffect(() => {
    if (props.userChoice === currentGuess) {
      props.onGameOver(pastGuesses.length);
    }
  }, [pastGuesses, currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "LOWER" && currentGuess < props.userChoice) ||
      (direction === "GREATER" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie :(", "Don't give the wrong hint!", [
        { text: "OKAY", style: "destructive" },
      ]);
      return;
    }

    if (direction === "LOWER") {
      currentMax.current = currentGuess;
    }

    if (direction === "GREATER") {
      currentMin.current = currentGuess;
    }

    const nextGuess = generateRandomNumber(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuesses((currentPastGuesses) => [nextGuess, ...currentPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <RegularText style={styles.title}>Computer's Guess</RegularText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <MainButton
          color={Colors.secondary}
          onPress={() => nextGuessHandler("LOWER")}
        >
          Lower
          {/* <Ionicons name="md-remove" size={24} color="white" /> */}
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("GREATER")}>
          Greater
          {/* <Ionicons name="md-add" size={24} color="white" /> */}
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, index, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    width: 300,
    maxWidth: "80%",
    justifyContent: "space-around",
    marginTop: 30,
  },
  button: {
    width: 100,
  },
  listContainer: {
    width: "80%",
    marginTop: 20,
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
  listItem: {
    backgroundColor: "white",
    elevation: 3,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 0.5,
    marginVertical: 10,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    width: 100,
  },
});

export { GameScreen };
