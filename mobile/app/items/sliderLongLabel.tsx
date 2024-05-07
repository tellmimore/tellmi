import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";
import { ViewStyle, TextStyle } from "react-native";
import Slider from "@react-native-community/slider";
import * as Progress from "react-native-progress";

import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function SliderWithLongLabel() {
  // create use states for the hobbies
  const [slider, setSlider] = useState(0.5);
  const { getItem, setItem } = useAsyncStorage("slider");

  const handleSliderChange = (value: React.SetStateAction<number>) => {
    setSlider(value);
  };

  useEffect(() => {
    // Load age from AsyncStorage when the component mounts
    const loadSlider = async () => {
      const savedSlider = await getItem();
      if (savedSlider) {
        setSlider(parseFloat(savedSlider));
      }
    };
    loadSlider();
  }, []);

  // TODO: Handle user input for textinput
  const handleContinue = async () => {
    await setItem(JSON.stringify(slider)); // Save slider value to AsyncStorage
    router.push("/items/radioButton");
    console.log("Slider value: " + slider);
  };
  const handleBack = async () => {
    router.push("/items/textinput");
  };
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.6} width={400} style={styles.progressBar} />
      <View style={styles.progressContainer}>
        <Text style={styles.title}>
          Schätzen Sie: Wie schwierig oder leicht wäre es gerade Ihren Partner
          zu erreichen?
        </Text>
        <Text style={styles.text2}>
          D.h. mit Ihrem Partern in wechselseitigen Kontakt zu treten, also auch
          eine Antwort zu bekommen? (z.B. per Telefon, SMS, Messenger)
        </Text>
        <Text style={styles.text2}>
          Kaum möglich wäre es auch, wenn es mit vielen negativen Konsequenzen
          für Sie oder Ihren Partner verbunden ist, oder sehr lange dauern
          würde.
        </Text>

        {/*Slider*/}
        <Slider
          style={styles.slider}
          maximumValue={1}
          minimumValue={0}
          minimumTrackTintColor="#9966FF"
          maximumTrackTintColor="#00BF40"
          thumbTintColor="#00FFFF"
          value={slider}
          onValueChange={handleSliderChange}
        ></Slider>
        <View style={styles.textContainer}>
          <Text style={styles.sliderLabelLeft}>
            Kaum möglich und text und text und text und text und text
          </Text>
          <Text style={styles.sliderLabelRight}>
            Ganz einfach und text und text und text und text und text
          </Text>
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

  sliderLabelLeft: {
    textAlign: "left",
    color: "#9966FF",
    fontWeight: "bold",
    width: "40%",
  },

  sliderLabelRight: {
    textAlign: "right",
    color: "#00BF40",
    fontWeight: "bold",
    width: "40%",
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
    marginTop: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
});
