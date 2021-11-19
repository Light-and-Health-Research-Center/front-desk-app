import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const CardImage = ({ imageName }) => {
  switch (imageName) {
    case "deliveries":
      return (
        <Image
          style={styles.image}
          source={require(`../../assets/undraw/deliveries.png`)}
        />
      );
    case "visitors":
      return (
        <Image
          style={styles.image}
          source={require(`../../assets/undraw/visitors.png`)}
        />
      );
    case "studyParticipants":
      return (
        <Image
          style={styles.image}
          source={require(`../../assets/undraw/studyParticipants.png`)}
        />
      );
  }
};

export default CardImage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
});
