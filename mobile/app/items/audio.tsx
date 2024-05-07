import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { useEffect } from "react";

import React, { useState } from "react";
import { Sound } from "expo-av/build/Audio";
import { Link } from "expo-router";
import * as Progress from "react-native-progress";

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
    console.log("Audio played");
  };
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.8} width={400} style={styles.progressBar} />
      <View style={styles.progressContainer}>
        <Text style={styles.title}>Hören Sie sich diese Audio Datei an:</Text>

        <Pressable style={styles.playButton} onPress={playSound}>
          <Text style={styles.playButtonText}>
            {isPlaying ? "Pause" : "Play"}
          </Text>
        </Pressable>

        <Link href="/items/video" asChild>
          <Pressable style={styles.buttonContainer} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </Link>

        <Link href="/items/radioButton" asChild>
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
    backgroundColor: "green",
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
