import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import NextScreenButton from "../components/NextScreenButton";
import { useFrontDesk } from "../contexts/FrontDeskContext";

const Main = () => {
  const frontDesk = useFrontDesk();
  const [continueButtonDisabled, setContinueButtonDisabled] = useState(true);

  useEffect(() => {
    if (frontDesk.numPackages !== 0) setContinueButtonDisabled(false);
    else setContinueButtonDisabled(true);
  }, [frontDesk.numPackages]);

  function decreaseNumPackages() {
    if (frontDesk.numPackages !== 0)
      frontDesk.setNumPackages(frontDesk.numPackages - 1);
  }

  function increaseNumPackages() {
    frontDesk.setNumPackages(frontDesk.numPackages + 1);
  }

  return (
    <>
      <Bubbles screen="deliveries" />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.header}># of packages</Text>
            <View style={styles.numericInputContainer}>
              <TouchableOpacity
                style={styles.numericInputIconContainer}
                onPress={decreaseNumPackages}
              >
                <Text style={styles.numericInputIcon}>-</Text>
              </TouchableOpacity>
              <View style={styles.numericInputNumberContainer}>
                <Text style={styles.numericInputNumber}>
                  {frontDesk.numPackages}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.numericInputIconContainer}
                onPress={increaseNumPackages}
              >
                <Text style={styles.numericInputIcon}>+</Text>
              </TouchableOpacity>
            </View>
            <NextScreenButton
              screen="DeliveriesScreen2"
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
  numericInputContainer: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "rgb(244, 244, 245)",
    borderRadius: 25,
    overflow: "hidden",
    borderColor: "rgb(20, 19, 67)",
    borderWidth: 5,
    marginTop: 50,
    marginBottom: 50,
  },
  numericInputNumberContainer: {
    borderColor: "rgb(20, 19, 67)",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  numericInputNumber: {
    fontSize: 50,
    padding: 25,
    color: "rgb(20, 19, 67)",
  },
  numericInputIconContainer: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(211, 210, 226)",
  },
  numericInputIcon: {
    fontSize: 50,
  },
});
