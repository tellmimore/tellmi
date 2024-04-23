import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";

import React, { useState } from "react";

export default function TabThreeScreen() {
  // create use states for the hobbies
  const [footballChecked, setFootballChecked] = useState(false);
  const [musicChecked, setMusicChecked] = useState(false);
  const [photographyChecked, setPhotographyChecked] = useState(false);
  const [dancingChecked, setDancingChecked] = useState(false);

  // TODO: Handle user input for hobbies
  const handleContinue = () => {
    console.log("Fußball: " + footballChecked);
    console.log("Musik: " + musicChecked);
    console.log("Fotografie: " + photographyChecked);
    console.log("Tanzen: " + dancingChecked);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bitte geben Sie an, welche der folgenden Hobbies Sie haben:
      </Text>

      {/*CheckBox*/}
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={footballChecked}
          onPress={() => setFootballChecked(!footballChecked)}
        />
        <Text style={styles.text1}>Fußball</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={musicChecked}
          onPress={() => setMusicChecked(!musicChecked)}
        />
        <Text style={styles.text1}>Musik</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={photographyChecked}
          onPress={() => setPhotographyChecked(!photographyChecked)}
        />
        <Text style={styles.text1}>Fotografie</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={dancingChecked}
          onPress={() => setDancingChecked(!dancingChecked)}
        />
        <Text style={styles.text1}>Tanzen</Text>
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
    marginTop: 0,
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
