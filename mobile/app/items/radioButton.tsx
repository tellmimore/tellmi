import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet } from "react-native";
//import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-radio-button';

import React, { useState } from "react";
import { Link, router } from "expo-router";
import * as Progress from "react-native-progress";

export default function RadioButtonScreen() {
  // create use states for the options
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
  };
  // TODO: Handle user input for textinput
  const handleContinue = () => {
    console.log("Selected Option: " + selectedOption);
    router.push("/items/audio");
  };
  const handleBack = async () => {
    router.push("/items/sliderLongLabel");
  };
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.7} width={400} style={styles.progressBar} />
      <View style={styles.progressContainer}>
        <Text style={styles.title}>Bitte geben Sie Ihr Geschlecht an.</Text>

        {/*Radio Button*/}

        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <Pressable style={styles.buttonContainer} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  progressBar: {
    width: "100%",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  text1: {
    fontSize: 20,
    marginTop: 10,
    width: "90%",
  },
  text2: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: "80%",
    textAlign: "center",
    backgroundColor: "#efefef",
  },

  textInput: {
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: "90%",
    height: 200,
    textAlign: "left",
    textAlignVertical: "top",
    backgroundColor: "#efefef",
  },

  buttonText: {
    borderRadius: 8,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
    width: "80%",
    textAlign: "center",
    backgroundColor: "#333",
    color: "#fff",
    overflow: "hidden",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
});
