import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from "react-native";
import BackToHomePageButton from "../components/BackToHomePageButton";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import NextScreenButton from "../components/NextScreenButton";
import { useFrontDesk } from "../contexts/FrontDeskContext";
import tw from "../lib/tailwind";

const Main = () => {
  return (
    <>
      <Bubbles screen="studyParticipants" />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Thank You</Text>
            <Text style={styles.text}>You've successfully checked in.</Text>
            <Text style={styles.text}>
              If you haven't already been given instructions on where to go,
              please call Barbara Plitnick at the number she provided to you.
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
  text: {
    color: "rgb(77, 77, 141)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 100,
  },
});
