import { Text, View, StyleSheet, Dimensions, Pressable } from "react-native";
import { Video } from "expo-av";
import { Link } from "expo-router";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Video2Screen() {
  const [mute, setMute] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);
  const { width } = Dimensions.get("window");

  const handlePlayAndPause = () => {
    setShouldPlay((prevShouldPlay) => !prevShouldPlay);
  };

  const handleVolume = () => {
    setMute((prevMute) => !prevMute);
  };

  //TODO: no current input!
  const handleContinue = () => {
    console.log("Video played");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Bitte schauen Sie sich folgendes Video an:
        </Text>
        <Video
          style={{ width, height: 300 }}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          shouldPlay={shouldPlay}
          isMuted={mute}
          resizeMode="cover"
        />
        <View style={styles.controlBar}>
          <MaterialIcons
            name={mute ? "volume-mute" : "volume-up"}
            size={45}
            color="white"
            onPress={handleVolume}
          />
          <MaterialIcons
            name={shouldPlay ? "pause" : "play-arrow"}
            size={45}
            color="white"
            onPress={handlePlayAndPause}
          />
        </View>
      </View>
      <Link href="/markWords" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </Link>
      <Link href="/audio" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {},
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
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
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
