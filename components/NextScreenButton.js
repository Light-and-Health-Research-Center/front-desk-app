import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowCircleRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/core";

const NextScreenButton = ({ screen, disabled }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      disabled={disabled}
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      <ArrowCircleRightIcon
        size="30"
        style={[styles.icon, disabled && styles.iconDisabled]}
      />
      <Text style={[styles.text, disabled && styles.textDisabled]}>
        Continue
      </Text>
    </TouchableOpacity>
  );
};

export default NextScreenButton;

const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "rgb(20, 19, 67)",
    padding: 20,
  },
  buttonDisabled: {
    backgroundColor: "rgb(122, 121, 169)",
  },
  icon: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
  },
  iconDisabled: {
    color: "rgb(211, 210, 226)",
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
  textDisabled: {
    color: "rgb(211, 210, 226)",
  },
});
