import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";

export default function RelDurScreen() {
  // set state variables for years and months of relationsship duration
  const [years, setYears] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const { getItem, setItem } = useAsyncStorage("relDur");

  useEffect(() => {
    // age value vom AsyncStorag lokal auf dem Gerät laden
    const loadDuration = async () => {
      try {
        const storedDuration = await getItem();
        if (storedDuration !== null) {
          const { years: storedYears, months: storedMonths } =
            JSON.parse(storedDuration);
          setYears(storedYears);
          setMonths(storedMonths);
        }
      } catch (error) {
        console.error(
          "Error loading relationship duration from AsyncStorage:",
          error
        );
      }
    };

    loadDuration();

    // Cleanup function
    return () => {
      // Any cleanup code
    };
  }, [getItem]); // Dependency added to useEffect to prevent unnecessary re-renders
  // TODO: How to handle the values?
  const handleContinue = async () => {
    try {
      // Save age value to AsyncStorage
      await setItem(JSON.stringify({ years, months }));
    } catch (error) {
      console.error(
        "Error saving relationsship duration to AsyncStorage:",
        error
      );
    }
    console.log("Years:", years, "Months: ", months);
  };

  return (
    <View style={styles.progressContainer}>
      <Progress.Bar progress={0.3} width={400} style={styles.progressBar} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Wie lange sind Sie schon mit Ihrem Partner zusammen?
        </Text>

        <Text style={styles.text1}>Jahre: </Text>
        <TextInput
          style={styles.input}
          placeholder="Anzahl der Jahre"
          keyboardType="numeric"
          value={years}
          onChangeText={(text) => setYears(text)} //save User Input as new variable for years
        />
        <Text style={styles.text1}>Monate:</Text>
        <TextInput
          style={styles.input}
          placeholder="Anzahl der Monate"
          keyboardType="numeric"
          value={months}
          onChangeText={(text) => setMonths(text)} //save User Input as new variable for months
        />
        <Link href="/items/checkboxForce" asChild>
          <Pressable style={styles.buttonContainer} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </Link>
        <Link href="/items/age" asChild>
          <Pressable style={styles.buttonContainer} onPress={handleContinue}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </Link>
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
