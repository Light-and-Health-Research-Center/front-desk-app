import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const HeroSection = () => {
  return (
    <View style={[tw`mx-auto max-w-5xl`]}>
      <Text
        style={[
          tw`uppercase text-barbiePink-80 font-semibold`,
          { fontSize: 25, lineHeight: 25, includeFontPadding: false },
        ]}
      >
        Welcome to the
      </Text>
      <Text
        style={[
          tw`uppercase text-stPatricksBlue-140 font-extrabold my-0 py-0 text-center`,
          { fontSize: 100, lineHeight: 100, includeFontPadding: false },
        ]}
      >
        Light and Health Research Center
      </Text>
      <Text
        style={[
          tw`uppercase text-barbiePink-80 font-semibold text-lg text-right ios:-mt-4`,
          { fontSize: 25, lineHeight: 25, includeFontPadding: false },
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
