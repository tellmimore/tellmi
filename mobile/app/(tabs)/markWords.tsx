import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

const words = ["apple", "banana", "orange", "grape", "kiwi"];

export default function WordGrid({
  words = [],
  gridSize,
}: {
  words: string[];
  gridSize: number;
}) {
  const grid = Array.from(Array(gridSize), () =>
    Array.from(Array(gridSize), () => "")
  );

  const addWordsToGrid = () => {
    // Place each word in the grid
    words.forEach((word, index) => {
      const startX = index * 2; // Start X position for each word
      const startY = 0; // Start Y position (top of the grid)
      // Place word horizontally
      for (let i = 0; i < word.length; i++) {
        const x = startX + i;
        const y = startY;
        if (x < gridSize && y < gridSize) {
          grid[x][y] = word[i];
        }
      }
    });
  };

  addWordsToGrid();

  const handleContinue = () => {
    console.log("Grid played");
  };

  return (
    <View style={styles.gridContainer}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={styles.cell}>
              <Text style={styles.cellText}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}

      <Link href="/video" asChild>
        <Pressable style={styles.buttonContainer} onPress={handleContinue}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "column",
  },
  cellText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    textAlign: "center",
  },
  saveButton: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
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
