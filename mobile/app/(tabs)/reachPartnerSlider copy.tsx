import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";
import { ViewStyle, TextStyle } from "react-native";
import Slider from "@react-native-community/slider";

import React, { useState } from "react";

export default function ReachPartnerScreen() {
  // create use states for the hobbies
  const [slider, setSlider] = useState(50);

  const handleSliderChange = (value: React.SetStateAction<number>) => {
    setSlider(value);
  };
  // TODO: Handle user input for textinput
  const handleContinue = () => {
    console.log("Slider value: " + slider);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Schätzen Sie: Wie schwierig oder leicht wäre es gerade Ihren Partner zu
        erreichen?
      </Text>
      <Text style={styles.text2}>
        D.h. mit Ihrem Partern in wechselseitigen Kontakt zu treten, also auch
        eine Antwort zu bekommen? (z.B. per Telefon, SMS, Messenger)
      </Text>
      <Text style={styles.text2}>
        Kaum möglich wäre es auch, wenn es mit vielen negativen Konsequenzen für
        Sie oder Ihren Partner verbunden ist, oder sehr lange dauern würde.
      </Text>

      {/*Slider*/}
      <Slider
        style={styles.slider}
        maximumValue={1}
        minimumValue={0}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="green"
        //thumbTintColor="blue"
        value={slider}
        onValueChange={handleSliderChange}
      ></Slider>
      <View style={styles.textContainer}>
        <Text style={{ textAlign: "left", color: "blue", fontWeight: "bold" }}>
          Kaum möglich
        </Text>
        <Text
          style={{ textAlign: "right", color: "green", fontWeight: "bold" }}
        >
          Ganz einfach
        </Text>
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
  slider: {
    width: 320,
    height: 70,
    marginLeft: 15,
    marginRight: 15,
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
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
