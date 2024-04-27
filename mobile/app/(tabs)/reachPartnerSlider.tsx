import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";
import { ViewStyle, TextStyle } from "react-native";

import React, { useState } from "react";

export default function ReachPartnerScreen() {
  // create use states for the hobbies
  const [slider, setSlider] = useState(50);

  // TODO: Handle user input for textinput
  const handleContinue = () => {
    console.log("Slider value: " + slider);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Schätzen Sie: Wie schwierig oder leicht wäre es gerade Ihren Partner zu
        erreichen?
      </Text>
      <Text>
        D.h. mit Ihrem Partern in wechselseitigen Kontakt zu treten, also auch
        eine Antwort zu bekommen? (z.B. per Telefon, SMS, Messenger)
      </Text>
      <Text>
        Kaum möglich wäre es auch, wenn es mit vielen negativen Konsequenzen für
        Sie oder Ihren Partner verbunden ist, oder sehr lange dauern würde.
      </Text>

      {/*Slider*/}
      <View style={styles.checkboxContainer}>
        <Text style={styles.text1}>Fußball</Text>
      </View>

      <Pressable style={styles.buttonContainer} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    fontSize: 30,
  },
  text1: {
    fontSize: 20,
    marginTop: 10,
    width: "90%",
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
