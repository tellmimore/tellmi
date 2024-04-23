import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";

import { useState } from "react";

export default function TabOneScreen() {
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
      />
      <Text style={styles.text1}>Monate:</Text>
      <TextInput
        style={styles.input}
        placeholder="Anzahl der Monate"
        keyboardType="numeric"
      />

      <Pressable style={styles.buttonContainer}>
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
    marginTop: 20,
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
  },
});
