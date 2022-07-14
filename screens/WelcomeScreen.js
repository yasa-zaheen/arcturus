// React
import React from "react";

// React-native
import { StyleSheet, Text, View, Button } from "react-native";

// Expo
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";

// Firebase
import firebase from "firebase";

// Components
import SolidButton from "../components/SolidButton";

WebBrowser.maybeCompleteAuthSession();

const WelcomeScreen = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "270600795310-1948j8khll0gnkl7kki5jom6p4ut5l4u.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = provider.credential(id_token);
      auth.signInWithCredential(credential);
    }
  }, [response]);

  const signInHandler = () => {
    promptAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey there!</Text>
      <Text style={styles.text}>
        Don’t be shy, click the button below to start chatting with your friends
        (it’s free 😉)!
      </Text>
      <SolidButton text="Sign in with Google" onPress={signInHandler} />
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
