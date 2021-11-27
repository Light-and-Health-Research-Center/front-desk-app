import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Dimensions } from "react-native";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import { useFrontDesk } from "../contexts/FrontDeskContext";
import BackToHomePageButton from "../components/BackToHomePageButton";

const Main = () => {
  const frontDesk = useFrontDesk();
  return (
    <>
      <Bubbles screen="visitors" />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Thank You</Text>
            <Text style={styles.text}>
              {frontDesk.getEmployeeNameFromID(frontDesk.selectedEmployee)} will
              be notified and should be with you shortly.
            </Text>
            <BackToHomePageButton />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
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
  text: {
    color: "rgb(77, 77, 141)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 100,
  },
});
