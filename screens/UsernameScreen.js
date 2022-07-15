// React
import React from "react";

// React-native
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import SolidButton from "../components/SolidButton";

// Expo
import * as SecureStore from "expo-secure-store";
import Input from "../components/Input";
import TextButton from "../components/TextButton";

// Components

const UsernameScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        {/* Header */}
        <Text style={styles.header}>What should we call you?</Text>
        {/* Input */}
        <Input placeholder={"Enter your username here"} />
        {/* Primary button */}
        <SolidButton text="That sounds about right!" />
        {/* Secondary button */}
        <TextButton text="Generate a random name" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UsernameScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
