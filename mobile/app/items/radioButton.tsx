import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import * as Progress from "react-native-progress";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function RadioButtonScreen() {
  // create use states for the options
  const [selectedGender, setSelectedGender] = useState("other");
  const { getItem, setItem } = useAsyncStorage("radioButton");

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };

  useEffect(() => {
    // Load age from AsyncStorage when the component mounts
    const loadGender = async () => {
      const savedGender = await getItem();
      if (savedGender) {
        setSelectedGender(savedGender);
      }
    };
    loadGender();
  }, []);

  // TODO: Handle user input for textinput
  const handleContinue = async () => {
    await setItem(selectedGender);
    console.log("Selected Option: " + selectedGender);
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
        <RadioButton.Group
          onValueChange={handleGenderChange}
          value={selectedGender}
        >
          <View style={styles.radiobutton}>
            <RadioButton value="male" />
            <Text style={styles.text1}>Männlich</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton value="female" />
            <Text style={styles.text1}>Weiblich</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton value="other" />
            <Text style={styles.text1}>Divers</Text>
          </View>
        </RadioButton.Group>

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
  radiobutton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
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
    //marginTop: 10,
    //width: "90%",
    textAlign: "center",
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
