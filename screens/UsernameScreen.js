// React
import React, { useState } from "react";

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
import Input from "../components/Input";
import TextButton from "../components/TextButton";

// Firebase
import firebase from "firebase";
import { db } from "../firebase";

// Components

// Hooks
import useAuthState from "../hooks/useAuthState";

// TODO: Get authenticated user
// TODO: Get data from input
// TODO: Add data to database on button click

const UsernameScreen = () => {
  const user = useAuthState();
  const [input, setInput] = useState("");

  const setUsername = () => {
    db.collection("users")
      .add({
        uid: user.uid,
        username: input,
        avatar: user.photoURL,
        seen: firebase.firestore.FieldValue.serverTimestamp(),
        status: "",
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const inputHandler = (text) => {
    setInput(text);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior="position"
        >
          {/* Header */}
          <Text style={styles.header}>What should we call you?</Text>
          {/* Input */}
          <Input
            placeholder={"Enter your username here"}
            value={input}
            onChangeText={inputHandler}
            autoCapitalize="none"
          />
          {/* Primary button */}
          <SolidButton text="That sounds about right!" onPress={setUsername} />
          {/* Secondary button */}
          <TextButton text="Generate a random name" />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default UsernameScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    flex: 1,
  },
  keyboardAvoidingView: {
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
