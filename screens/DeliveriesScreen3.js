import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackToHomePageButton from "../components/BackToHomePageButton";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import { useFrontDesk } from "../contexts/FrontDeskContext";

const DeliveriesScreen3 = () => {
  const frontDesk = useFrontDesk();
  return (
    <>
      <Bubbles screen="deliveries" />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Thank you</Text>
            {frontDesk.signatureRequired ? (
              <Text style={styles.text}>
                Someone will be with you shortly to sign for the package(s)
              </Text>
            ) : (
              <Text style={styles.text}>
                Please leave the package(s) in the designated area.
              </Text>
            )}

            <BackToHomePageButton />
          </View>
        </View>
      </SafeAreaView>
      <HomeButton />
    </>
  );
};

export default DeliveriesScreen3;

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
