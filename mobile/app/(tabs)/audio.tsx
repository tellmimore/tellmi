import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CheckBox } from "react-native-elements";
import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native";
import { ViewStyle, TextStyle } from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { useEffect } from "react";

import React, { useState } from "react";
import { Sound } from "expo-av/build/Audio";
import { Link } from "expo-router";

export default function AudioStreamingScreen() {
  // create use states for the input
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (sound !== null) {
        sound.unloadAsync(); // Unload the sound when the component unmounts
      }
    };
  }, [sound]);

  const playSound = async () => {
    try {
      if (sound === null) {
        setIsLoading(true); //Sound is loading
        const { sound: audioSound } = await Audio.Sound.createAsync(
          require("./happy_music.mp3")
        );
        setSound(audioSound);
        console.log("Sound loaded successfully.");
        setIsLoading(false); // Set loading state to false after audio is loaded
      }

      if (!isPlaying) {
        await sound?.playAsync();
        setIsPlaying(true);
        console.log("Sound is now playing.");
      } else {
        await sound?.pauseAsync();
        setIsPlaying(false);
        console.log("Sound is paused.");
      }
    } catch (error) {
      console.log("Error playing sound: ", error);
      setIsLoading(false); // Make sure to set loading state to false in case of error
    }
  };

  // TODO: Handle user input for continue button
  const handleContinue = () => {
    console.log("Audio played: " + sound);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hören Sie sich diese Audio Datei an:</Text>

      <Pressable style={styles.playButton} onPress={playSound}>
        <Text style={styles.playButtonText}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </Pressable>

      <Link href="/video" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Coninue</Text>
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
  slider: {
    width: 320,
    height: 70,
    marginLeft: 15,
    marginRight: 15,
  },

  playButton: {
    width: 100,
    color: "blue",
    alignItems: "center",
    alignSelf: "center",
  },

  playButtonText: {
    borderRadius: 8,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
    width: "80%",
    textAlign: "center",
    backgroundColor: "blue",
    color: "#fff",
    overflow: "hidden",
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
    color: "blue",
    fontWeight: "bold",
    width: "40%",
  },

  sliderLabelRight: {
    textAlign: "right",
    color: "green",
    fontWeight: "bold",
    width: "40%",
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
