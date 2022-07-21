// React
import React from "react";

// React-native
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ placeholder, value, onChangeText, autoCapitalize }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        clearButtonMode="always"
        autoCapitalize={autoCapitalize}
      />
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
