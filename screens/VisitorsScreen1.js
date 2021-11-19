import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import { useFrontDesk } from "../contexts/FrontDeskContext";
import NextScreenButton from "../components/NextScreenButton";

const Main = () => {
  const frontDesk = useFrontDesk();
  const [continueButtonDisabled, setContinueButtonDisabled] = useState(true);

  useEffect(() => {
    if (frontDesk.userName !== "") setContinueButtonDisabled(false);
    else setContinueButtonDisabled(true);
  }, [frontDesk.userName]);
  return (
    <>
      <Bubbles screen="visitors" />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Your Name</Text>
            <TextInput
              editable
              maxLength={40}
              placeholder="Johnny Appleseed"
              value={frontDesk.userName}
              onChangeText={frontDesk.setUserName}
              style={styles.input}
            />
            <NextScreenButton
              screen="VisitorsScreen2"
              disabled={continueButtonDisabled}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <HomeButton />
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  contentContainer: {
    alignItems: "center",
    maxWidth: "70%",
  },
  header: {
    fontSize: 100,
    textTransform: "uppercase",
    fontWeight: "600",
    color: "rgb(20, 19, 67)",
    textAlign: "center",
  },
  input: {
    fontSize: 50,
    textAlign: "center",
    width: Dimensions.get("window").width * 0.7,
    height: 100,
    borderRadius: 25,
    borderColor: "rgb(20, 19, 67)",
    borderWidth: 5,
    backgroundColor: "rgb(244, 244, 245)",
    marginTop: 50,
    marginBottom: 50,
  },
});
