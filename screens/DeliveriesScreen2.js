import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/core";
import { useFrontDesk } from "../contexts/FrontDeskContext";

const DeliveriesScreen2 = () => {
  const frontDesk = useFrontDesk();
  const navigation = useNavigation();

  function setSignatureRequired() {
    frontDesk.setSignatureRequired(true);
    navigation.navigate("DeliveriesScreen3");
  }

  function setSignatureNotRequired() {
    frontDesk.setSignatureRequired(false);
    navigation.navigate("DeliveriesScreen3");
  }

  return (
    <>
      <Bubbles screen="deliveries" />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Signature required?</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.noButton]}
                onPress={setSignatureNotRequired}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                onPress={setSignatureRequired}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <HomeButton />
    </>
  );
};

export default DeliveriesScreen2;

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
  buttonsContainer: {
    flex: 0,
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    width: 200,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  noButton: {
    backgroundColor: "rgb(239, 68, 68)",
    marginRight: 50,
  },
  yesButton: {
    backgroundColor: "rgb(34, 197, 94)",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "white",
  },
});
