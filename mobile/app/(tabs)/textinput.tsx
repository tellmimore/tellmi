import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";
import { ViewStyle, TextStyle } from "react-native";

import React, { useState } from "react";
import { Link } from "expo-router";

export default function TextInputScreen() {
  // create use states for the hobbies
  const [textinput, setTextinput] = useState("");

  // TODO: Handle user input for textinput
  const handleContinue = () => {
    console.log("Text input: " + textinput);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Wenn Sie etwas anmerken möchten, können Sie dies hier tun.
      </Text>
      <Text style={styles.text2}>
        Waren Sie sich z.B. bei einem Item sehr unsicher und wenn ja, warum? Hat
        irgendetwas Ihe Antworten verfälscht, z.B. weil Sie sich mit jemandem
        darüber ausgetauscht haben?
      </Text>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholder="Geben Sie hier Ihre Anmerkungen ein..."
        value={textinput}
        onChangeText={(text) => setTextinput(text)} // Save User Text input
      ></TextInput>

      <Link href="/sliderLongLabel" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Coninue</Text>
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
