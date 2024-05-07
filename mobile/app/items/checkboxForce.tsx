import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";

import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";

export default function CheckboxScreen() {
  //TODO: Add force choice?

  // create use states for the checkbox
  const [footballChecked, setFootballChecked] = useState(false);
  const [musicChecked, setMusicChecked] = useState(false);
  const [photographyChecked, setPhotographyChecked] = useState(false);
  const [dancingChecked, setDancingChecked] = useState(false);
  const { getItem, setItem } = useAsyncStorage("relDur");

  useEffect(() => {
    // age value vom AsyncStorag lokal auf dem Gerät laden
    const loadHobbies = async () => {
      try {
        const storedHobbies = await getItem();
        if (storedHobbies !== null) {
          const {
            footballChecked: storedFootball,
            musicChecked: storedMusic,
            photographyChecked: storedPhotography,
            dancingChecked: storedDancing,
          } = JSON.parse(storedHobbies);
          setFootballChecked(storedFootball);
          setMusicChecked(storedMusic);
          setPhotographyChecked(storedPhotography);
          setDancingChecked(storedDancing);
        }
      } catch (error) {
        console.error("Error loading hobbies from AsyncStorage:", error);
      }
    };

    loadHobbies();

    // Cleanup function
    return () => {
      // Any cleanup code
    };
  }, [getItem]); // Dependency added to useEffect to prevent unnecessary re-renders

  // TODO: Handle user input for checkbox
  const handleContinue = async () => {
    try {
      // Save age value to AsyncStorage
      await setItem(
        JSON.stringify({
          footballChecked,
          musicChecked,
          photographyChecked,
          dancingChecked,
        })
      );
      router.push("/items/textinput");
    } catch (error) {
      console.error("Error saving hobbies to AsyncStorage:", error);
    }

    console.log("Fußball: " + footballChecked);
    console.log("Musik: " + musicChecked);
    console.log("Fotografie: " + photographyChecked);
    console.log("Tanzen: " + dancingChecked);
  };

  const handleBack = async () => {
    router.push("/items/relDur");
  };
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.4} width={400} style={styles.progressBar} />
      <View style={styles.progressContainer}>
        <Text style={styles.title}>
          Bitte geben Sie an, welche der folgenden Hobbies Sie haben:
        </Text>

        {/*CheckBox*/}
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={footballChecked}
            onPress={() => {
              console.log("CheckBox pressed");
              setFootballChecked(!footballChecked);
            }}
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
    //alignItems: "center",
    justifyContent: "flex-start",
  },
  progressBar: {
    width: "100%",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 10,
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
    marginTop: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginRight: 20,
  },
});
