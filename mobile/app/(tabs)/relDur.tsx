import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function IndexScreen() {
  // set state variables for years and months of relationsship duration
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
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
        onChangeText={setYears} //save User Input as new variable for years
      />
      <Text style={styles.text1}>Monate:</Text>
      <TextInput
        style={styles.input}
        placeholder="Anzahl der Monate"
        keyboardType="numeric"
        value={months}
        onChangeText={setMonths} //save User Input as new variable for months
      />
      <Link href="/checkboxForce" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </Link>
      <Link href="/age" asChild>
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
    marginTop: 20,
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
    marginTop: 5,
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
  backButtonText: {
    borderRadius: 8,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
    width: "80%",
    textAlign: "center",
    backgroundColor: "#bbb",
    color: "#333",
    overflow: "hidden",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
