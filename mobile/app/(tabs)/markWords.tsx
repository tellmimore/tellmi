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

interface CrosswordPuzzleItemProps {
  row: number;
  col: number;
  value: string;
  onChange: (row: number, col: number, text: string) => void;
}
const CrosswordPuzzleItem: React.FC<CrosswordPuzzleItemProps> = ({
  row,
  col,
  value,
  onChange,
}) => {
  const handleChange = (text: string) => {
    onChange(row, col, text);
  };

  return (
    <View style={styles.cell}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={value}
        maxLength={1}
        keyboardType="default"
        autoCapitalize="characters"
      />
    </View>
  );
};

const CrosswordPuzzle = () => {
  const initialGrid = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ];
  const [grid, setGrid] = useState(initialGrid);

  const handleCellChange = (row: number, col: number, text: string) => {
    const newGrid = [...grid];
    newGrid[row][col] = text;
    setGrid(newGrid);
  };

  return (
    <View style={styles.container}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value, colIndex) => (
            <CrosswordPuzzleItem
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={value}
              onChange={handleCellChange}
            />
          ))}
        </View>
      ))}
      <TouchableOpacity onPress={() => console.log("Save", grid)}>
        <Text style={styles.saveButton}>Save</Text>
      </TouchableOpacity>
      <Link href="/video" asChild>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CrosswordPuzzle;
