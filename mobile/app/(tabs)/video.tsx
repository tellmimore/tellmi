import { Text, View } from "@/components/Themed";
import { Pressable, StyleSheet } from "react-native";
//import Video from "expo-av/build/Video";
import React, { useEffect, useState } from "react";
import { Video } from "expo-av";

export default function VideoStreamingScreen() {
  // create use states for the input
  /*const [video, setVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (video !== null) {
        video.unloadAsync(); // Unload the video when the component unmounts
      }
    };
  }, [video]);

  const playVideo = async () => {
    try {
      if (video === null) {
        setIsLoading(true);
        const videoObject = new Video();
        await videoObject.loadAsync({
          uri: "https://videos.pexels.com/video-files/20325563/20325563-uhd_3840_2160_60fps.mp4",
        });
        setVideo(videoObject);
        console.log("Video loaded successfully.");
        setIsLoading(false);
      }
      if (!isPlaying) {
        await video?.playAsync();
        setIsPlaying(true);
        console.log("Video is playing.");
      } else {
        await video?.playAsync(); //video? --> only if video is not null
        setIsPlaying(false);
        console.log("Video is paused.");
      }
    } catch (error) {
      console.log("Error playing or pausing video: ", error);
      setIsLoading(false);
    }
  };
  // TODO: Handle user input for continue button
  const handleContinue = () => {
    console.log("Video played: " + video);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schauen Sie sich dieses Video an:</Text>
      <Video>ref={video}</Video>
      <Pressable style={styles.playButton} onPress={playVideo}>
        <Text style={styles.playButtonText}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </Pressable>

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
  video: {},

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
*/
}
