import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Progress from "react-native-progress";

const words = ["apple", "banana", "orange", "grape", "kiwi"];

export default function WordGrid() {
  interface Cell {
    letter: string;
    found: boolean;
    wordIndex?: number; // Index of the word in the 'words' array
  }

  function SearchGrid({
    words = [],
    gridSize,
  }: {
    words: string[];
    gridSize: number;
  }) {
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [grid, setGrid] = useState<Cell[][]>([]);

    useEffect(() => {
      // Function to generate a random letter
      const getRandomLetter = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      };

      // Function to add words to the grid
      const addWordsToGrid = () => {
        const newGrid = Array.from(Array(gridSize), () =>
          Array.from(Array(gridSize), () => ({ letter: "", found: false }))
        );

        let currentX = 0;

        // Place each word in the grid
        words.forEach((word, index) => {
          // Randomly decide whether to place horizontally or vertically
          //const isHorizontal = Math.random() < 0.5;

          // Get random start position within the grid
          if (currentX + word.length <= gridSize) {
            // Place word in Grid
            for (let i = 0; i < word.length; i++) {
              newGrid[currentX][i] = {
                letter: word[i],
                found: false,
                //wordIndex: index,
              };
            }
            // Move the starting position for the next word
            currentX += word.length + 1; // Add 1 for spacing between words
          }
          // Fill the remaining empty cells with random letters
          for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
              if (newGrid[i][j].letter === "") {
                newGrid[i][j] = { letter: getRandomLetter(), found: false };
              }
            }
          }
        });

        // Set the initialized grid
        setGrid(newGrid);
      };

      // Initialize the grid when component mounts
      addWordsToGrid();
    }, []);

    // Function to handle word selection
    const handleWordSelect = (word: string) => {
      console.log("Selected Word:", word);
      // Check if the selected letters form any complete word
      const foundWord = words.find((w) => w === word);
      console.log("Found Words:", foundWord);
      if (foundWord && !foundWords.includes(foundWord)) {
        setFoundWords([...foundWords, foundWord]);
      }
    };

    const handleContinue = () => {
      console.log("Word found:" + setFoundWords);
    };

    return (
      <View style={styles.gridContainer}>
        <Progress.Bar progress={0.95} width={400} style={styles.progressBar} />
        <Text style={styles.title}>
          Finden Sie folgende Wörter in der Matrix:
        </Text>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <TouchableOpacity
                key={cellIndex}
                style={[
                  styles.cell,
                  cell.found && styles.foundCell,
                  cell.wordIndex !== undefined &&
                    foundWords.includes(words[cell.wordIndex]) &&
                    styles.foundWordCell,
                ]}
                onPress={() => {
                  console.log("cell.wordIndex:", cell.wordIndex);
                  if (cell.wordIndex !== undefined) {
                    console.log("Selected Word:", words[cell.wordIndex]);
                    handleWordSelect(words[cell.wordIndex]);
                  } else {
                    console.log("No word found at this cell.");
                  }
                }}
              >
                <Text style={styles.cellText}>{cell.letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <Link href="/items/video" asChild>
          <Pressable style={styles.buttonContainer} onPress={handleContinue}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  const styles = StyleSheet.create({
    foundWordCell: {
      backgroundColor: "green",
    },
    foundCell: {
      // Define foundCell style
      backgroundColor: "yellow",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
    },
    gridContainer: {
      flexDirection: "column",
      borderWidth: 1,
      borderColor: "black",
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    cellText: {
      fontSize: 20,
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
    row: {
      flexDirection: "row",
    },
    cell: {
      width: 35,
      height: 35,
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

  return <SearchGrid words={words} gridSize={9} />;
}
