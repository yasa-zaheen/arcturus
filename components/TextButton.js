// React
import React from "react";

// React-native
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TextButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#FF2D55",
    fontSize: 15,
    fontWeight: "600",
  },
});
