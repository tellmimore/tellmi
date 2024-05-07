import { Text, View } from "@/components/Themed";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, router } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";

const predefinedWords = ["apple", "banana", "orange", "grape", "kiwi"];

export default function WordGrid() {
  const [grid, setGrid] = useState<string[][]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [highlightedCells, setHighlightedCells] = useState<number[][]>([]);

  useEffect(() => {
    generateGrid();
  }, []);

  const generateGrid = () => {
    const newGrid: string[][] = [];
    for (let i = 0; i < 9; i++) {
      const row: string[] = [];
      for (let j = 0; j < 9; j++) {
        row.push("");
      }
      newGrid.push(row);
    }
    predefinedWords.forEach((word) => {
      let placed = false;
      while (!placed) {
        const rowIndex = Math.floor(Math.random() * 9);
        const startColIndex = Math.floor(Math.random() * (9 - word.length + 1));
        let validPlacement = true;
        for (let i = 0; i < word.length; i++) {
          if (newGrid[rowIndex][startColIndex + i] !== "") {
            validPlacement = false;
            break;
          }
        }
        if (validPlacement) {
          for (let i = 0; i < word.length; i++) {
            newGrid[rowIndex][startColIndex + i] = word[i];
          }
          placed = true;
        }
      }
    });

    // Fill remaining cells with random letters
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (newGrid[i][j] === "") {
          newGrid[i][j] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          ); // Random uppercase letter
        }
      }
    }

    setGrid(newGrid);
  };

  const handleCellClick = (row: number, col: number) => {
    // Check if clicked cell forms part of any predefined word
    const clickedCell = grid[row][col];
    const foundWord = predefinedWords.find((word) => {
      const startCol = col - word.indexOf(clickedCell);
      if (startCol >= 0 && startCol + word.length <= 9) {
        return word.split("").every((letter, index) => {
          return grid[row]?.[startCol + index] === letter;
        });
      }
      return false;
    });
    if (foundWord && !foundWords.includes(foundWord)) {
      setFoundWords([...foundWords, foundWord]);
      highlightWord(foundWord);
    }
  };

  const highlightWord = (word: string) => {
    // Check if the word is already found
    if (!foundWords.includes(word)) {
      const newHighlightedCells: number[][] = [];
      let wordFound = false; // Flag to track if the word is found
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === word[0]) {
            // Check if the word matches horizontally
            if (j + word.length <= 9) {
              let match = true;
              for (let k = 1; k < word.length; k++) {
                if (grid[i][j + k] !== word[k]) {
                  match = false;
                  break;
                }
              }
              if (match) {
                for (let k = 0; k < word.length; k++) {
                  newHighlightedCells.push([i, j + k]);
                }
                wordFound = true; // Set the flag to true if word is found
              }
            }
            // Check if the word matches vertically
            if (i + word.length <= 9) {
              let match = true;
              for (let k = 1; k < word.length; k++) {
                if (grid[i + k][j] !== word[k]) {
                  match = false;
                  break;
                }
              }
              if (match) {
                for (let k = 0; k < word.length; k++) {
                  newHighlightedCells.push([i + k, j]);
                }
                wordFound = true;
              }
            }
          }
        }
      }
      if (wordFound) {
        console.log("Word found: " + word);
        setHighlightedCells([...highlightedCells, ...newHighlightedCells]);
      }
    }
  };

  const handleBack = async () => {
    router.push("/items/video");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Progress.Bar progress={1} width={400} style={styles.progressBar} />
      <View style={styles.progressContainer}>
        <Text style={styles.title}>
          Finden Sie folgene Wörter im Wortgitter:
        </Text>
        <Text style={styles.text1}>{predefinedWords.join(", ")}</Text>

        {/*Wortgitter*/}
        <View style={styles.grid}>
          {grid.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, colIndex) => {
                const isHighlighted = highlightedCells.some(
                  ([r, c]) => r === rowIndex && c === colIndex
                );
                return (
                  <TouchableOpacity
                    key={colIndex}
                    onPress={() => handleCellClick(rowIndex, colIndex)}
                  >
                    <View
                      style={[
                        styles.cell,
                        isHighlighted && styles.highlightedCell,
                      ]}
                    >
                      <Text>{cell}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        <View style={styles.foundWords}>
          <Text style={styles.title}>Gefundene Wörter:</Text>
          <Text style={styles.text2}>{foundWords.join(", ")}</Text>
          {foundWords.length === predefinedWords.length && (
            <Text style={styles.wordsFound}>Alle Wörter gefunden!</Text>
          )}
        </View>

        {/*Buttons*/}
        <Pressable style={styles.buttonContainer} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wordsFound: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#00BF40",
    marginTop: 10,
  },
  highlightedCell: {
    backgroundColor: "#CCB3FF",
  },
  grid: {
    flexDirection: "column",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 35,
    height: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  foundWords: {
    marginTop: 20,
  },
  foundWordsTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 0,
    marginRight: 10,
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
    marginTop: 10,
    justifyContent: "flex-start",
    fontStyle: "italic",
  },
  text2: {
    fontSize: 20,
    marginTop: 0,
    justifyContent: "flex-start",
    color: "#9966FF",
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
