// React
import React from "react";

// React-native
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// Components
import SolidButton from "../components/SolidButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey there!</Text>
      <Text style={styles.text}>
        Don’t be shy, click the button below to start chatting with your friends
        (it’s free 😉)!
      </Text>
      <SolidButton text="Sign in with Google" />
      <Text style={styles.mastHead}>Made by Yasa Zaheen</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
  },
  mastHead: {
    position: "absolute",
    fontSize: 15,
    bottom: 40,
    alignSelf: "center",
  },
});
