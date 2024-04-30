import * as React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Link } from "expo-router";

export default function Video2Screen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const handleContinue = () => {
    console.log("");

    //navigation.navigate("AgeInput");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Bitte schauen Sie sich folgendes Video an:{" "}
        </Text>
        <Video
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          shouldPlay
          resizeMode="cover"
        />
        <View style={styles.controlBar}></View>
      </View>
      <Link href="/markWords" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Coninue</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "80%",
    height: 300,
  },
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
    marginTop: 30,
  },
});
