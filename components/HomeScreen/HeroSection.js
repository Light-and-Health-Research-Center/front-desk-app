import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const HeroSection = () => {
  return (
    <View style={[tw`mx-auto max-w-5xl`, { marginTop: 20 }]}>
      <Text
        style={[
          tw`uppercase text-barbiePink-80 font-semibold`,
          { fontSize: 25, lineHeight: 30 },
        ]}
      >
        Welcome to the
      </Text>
      <Text
        style={[
          tw`uppercase text-stPatricksBlue-140 my-0 py-0 text-center`,
          {
            fontSize: 100,
            lineHeight: 100,
            includeFontPadding: false,
            fontWeight: "bold",
          },
        ]}
      >
        Light and Health Research Center
      </Text>
      <Text
        style={[
          tw`uppercase text-barbiePink-80 font-semibold text-lg text-right -mt-3`,
          { fontSize: 25, lineHeight: 25 },
        ]}
      >
        at Mount Sinai
      </Text>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
});
