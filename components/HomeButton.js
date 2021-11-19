import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeIcon } from "react-native-heroicons/solid";
import { useFrontDesk } from "../contexts/FrontDeskContext";

const HomeButton = () => {
  const frontDesk = useFrontDesk();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          frontDesk.backToHome();
        }}
      >
        <HomeIcon color="white" size="30" style={styles.icon} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 100,
    top: 50,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "rgb(20, 19, 67)",
    padding: 20,
  },
  icon: {
    marginTop: "auto",
    marginBottom: "auto",
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
