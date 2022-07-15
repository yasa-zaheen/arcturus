// React
import React from "react";

// React-native
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} clearButtonMode="always" />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
});
