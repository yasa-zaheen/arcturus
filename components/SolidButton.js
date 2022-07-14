// React
import React from "react";

// React-native
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SolidButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SolidButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF2D55",
    padding: 20,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});
