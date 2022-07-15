// React
import React from "react";

// React-native
import { StyleSheet, Text, View, Platform } from "react-native";

// Expo
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";

// Firebase
import firebase from "firebase";
import { auth } from "../firebase";

// Components
import SolidButton from "../components/SolidButton";

WebBrowser.maybeCompleteAuthSession();

const WelcomeScreen = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "270600795310-1948j8khll0gnkl7kki5jom6p4ut5l4u.apps.googleusercontent.com",
  });

  // SecureStore.deleteItemAsync("auth-credentials");

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = provider.credential(id_token);
      auth.signInWithCredential(credential);

      // Storing the auth on the device
      if (Platform.OS !== "web") {
        SecureStore.setItemAsync("auth-credentials", JSON.stringify(id_token));
      }

      navigation.navigate("Username");
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
    backgroundColor: "#ffffff",
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
