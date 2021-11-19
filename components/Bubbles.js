import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const Bubbles = ({ screen }) => {
  const screenSpecificStyle = {
    visitors: styles.visitorBubble,
    deliveries: styles.deliveriesBubble,
    studyParticipants: styles.studyParticipantsBubble,
  };
  return (
    <View style={styles.container}>
      <View style={[styles.largeBubble, screenSpecificStyle[screen]]} />
      <View style={[styles.mediumBubble, screenSpecificStyle[screen]]} />
      <View style={[styles.smallBubble, screenSpecificStyle[screen]]} />
      {/* <BlurView style={[styles.blur]} intensity={100} /> */}
    </View>
  );
};

export default Bubbles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  blur: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  largeBubble: {
    flex: 1,
    position: "absolute",
    right: "10%",
    top: "28%",
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    zIndex: -1,
  },
  mediumBubble: {
    flex: 1,
    position: "absolute",
    right: "65%",
    top: "25%",
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    zIndex: -1,
  },
  smallBubble: {
    flex: 1,
    position: "absolute",
    right: "50%",
    top: "62%",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    zIndex: -1,
  },
  visitorBubble: {
    backgroundColor: "rgba(125, 211, 252, 0.3)",
  },
  deliveriesBubble: {
    backgroundColor: "rgba(253, 224, 71, 0.3)",
  },
  studyParticipantsBubble: {
    backgroundColor: "rgba(52, 211, 153, 0.3)",
  },
});
