import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import tw from "../../lib/tailwind";
import CardImage from "./CardImage";
import { useFrontDesk } from "../../contexts/FrontDeskContext";
import { useNavigation } from "@react-navigation/native";
import { ArrowSmRightIcon } from "react-native-heroicons/solid";

const CardSection = () => {
  const cardsData = [
    {
      bgColor: "#7DD3FC",
      text: "Vistors",
      imageName: "visitors",
      navigateTo: "VisitorsScreen1",
    },
    {
      bgColor: "#34D399",
      text: "Study Participants",
      imageName: "studyParticipants",
      navigateTo: "StudyParticipantsScreen1",
    },
    {
      bgColor: "#FDE047",
      text: "Deliveries",
      imageName: "deliveries",
      navigateTo: "DeliveriesScreen1",
    },
  ];

  const frontDesk = useFrontDesk();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 0 }}>
      <View style={styles.checkInTextContainer}>
        <Text style={styles.checkInText}>Please Check In</Text>
        <ArrowSmRightIcon size="25" style={styles.icon} />
      </View>
      <View style={{ flex: 0, flexDirection: "row" }}>
        <ScrollView horizontal={true}>
          {cardsData.map((cardData) => (
            <TouchableOpacity
              onPress={() => {
                frontDesk.setOnHomeScreen(false);
                navigation.navigate(`${cardData.navigateTo}`);
              }}
              key={cardData.text}
              style={[styles.card, { backgroundColor: `${cardData.bgColor}` }]}
            >
              <Text style={[styles.cardText]}>{cardData.text}</Text>
              <View style={styles.imageContainer}>
                <CardImage imageName={cardData.imageName} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  checkInTextContainer: {
    flex: 0,
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: -5,
    alignItems: "center",
  },
  checkInText: {
    color: "rgb(20, 19, 67)",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  icon: {
    marginLeft: 10,
    color: "rgb(20, 19, 67)",
  },
  card: {
    margin: 20,
    width: 450,
    borderRadius: 40,
    height: Dimensions.get("window").height * 0.5,
    paddingTop: 15,
    paddingBottom: 0,
    paddingRight: 30,
    paddingLeft: 30,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: -35, height: 4 },
    shadowRadius: 4,
  },
  cardText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 40,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  imageContainer: {
    flex: 1,
  },
});
