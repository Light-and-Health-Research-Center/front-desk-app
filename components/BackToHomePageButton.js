import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowCircleLeftIcon } from "react-native-heroicons/solid";
import { useFrontDesk } from "../contexts/FrontDeskContext";

const BackToHomePageButton = () => {
  const frontDesk = useFrontDesk();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        frontDesk.backToHome();
      }}
    >
      <ArrowCircleLeftIcon size="30" style={styles.icon} />
      <Text style={styles.text}>Back to home page</Text>
    </TouchableOpacity>
  );
};

export default BackToHomePageButton;

const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "rgb(20, 19, 67)",
    padding: 20,
  },

  icon: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
  },

  text: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: "600",
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
    textTransform: "uppercase",
  },
});
