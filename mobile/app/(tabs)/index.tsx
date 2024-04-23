import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useNavigation } from "@react-navigation/native";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

export default function TabOneScreen() {
  // set state variables for years and months of relationsship duration
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const navigation = useNavigation();

  // TODO: How to handle the values?
  const handleContinue = () => {
    console.log("Years:" + years);
    console.log("Months:" + months);

    // Navigate to second Registration screen (Age) on Continue press
    //navigation.navigate("ageInput");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Wie lange sind Sie schon mit Ihrem / Ihrer PartnerIn zusammen?
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
    marginTop: 20,
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
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
