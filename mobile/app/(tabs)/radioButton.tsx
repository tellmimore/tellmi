import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet } from "react-native";
//import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-radio-button';

import React, { useState } from "react";
import { Link } from "expo-router";

export default function RadioButtonScreen() {
  // create use states for the options
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
  };
  // TODO: Handle user input for textinput
  const handleContinue = () => {
    console.log("Selected Option: " + selectedOption);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitte geben Sie Ihr Geschlecht an.</Text>

      {/*Radio Button*/}

      <Link href="/audio" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </Link>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: 320,
    height: 70,
    marginLeft: 15,
    marginRight: 15,
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
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
    marginTop: 20,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
});
