import React from "react";
import { SafeAreaView } from "react-native";
import HeroSection from "../components/HomeScreen/HeroSection";
import CardSection from "../components/HomeScreen/CardSection";
import tw from "../lib/tailwind";

const Main = () => {
  return (
    <SafeAreaView
      style={[tw`mx-12`, { flex: 1, justifyContent: "space-evenly" }]}
    >
      <HeroSection />
      <CardSection />
    </SafeAreaView>
  );
};

export default Main;
