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

      <TextInput placeholder="Anzahl der Jahre" keyboardType="numeric" />
      <Text>Jahre und </Text>
      <TextInput placeholder="Anzahl der Monate" keyboardType="numeric" />
      <Text> Monate</Text>

      <Pressable>
        <Text>Continue</Text>
      </Pressable>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
});
