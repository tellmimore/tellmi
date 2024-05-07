import { Text, View } from "@/components/Themed";

import { Pressable, StyleSheet, TextInput } from "react-native";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";
import { useRouter } from "expo-router";

export default function AgeInputScreen() {
  // set state Variable for age
  const [age, setAge] = useState("");
  const { getItem, setItem } = useAsyncStorage("age");
  const router = useRouter();

  // TODO: How to handle age variable?
  const handleContinue = async () => {
    router.push("/items/relDur"); // Navigate to the next screen

    console.log("Age:", age);
  };

  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.2} width={400} style={styles.progressBar} />
      <View style={styles.progressContainer}>
        <Text style={styles.title}>
          Bitte geben Sie Ihr Alter in Jahren an:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Jahre"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge} // Save User Age input
        />

        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
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
    justifyContent: "center",
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
    width: 300,
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
});