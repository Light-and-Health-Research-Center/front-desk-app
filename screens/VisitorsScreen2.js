import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Dimensions } from "react-native";
import Bubbles from "../components/Bubbles";
import HomeButton from "../components/HomeButton";
import { useFrontDesk } from "../contexts/FrontDeskContext";
import NextScreenButton from "../components/NextScreenButton";
import DropDownPicker from "react-native-dropdown-picker";

const VisitorsScreen2 = () => {
  const frontDesk = useFrontDesk();
  const [continueButtonDisabled, setContinueButtonDisabled] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (frontDesk.selectedEmployee !== "") setContinueButtonDisabled(false);
    else setContinueButtonDisabled(true);
  }, [frontDesk.selectedEmployee]);

  return (
    <>
      <Bubbles screen="visitors" />
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Who are you here to see?</Text>
            <DropDownPicker
              textStyle={{
                fontSize: 50,
                textAlign: "center",
              }}
              placeholder="Select..."
              placeholderStyle={{
                color: "grey",
              }}
              itemSeparator={true}
              itemSeparatorStyle={{
                height: 2,
                backgroundColor: "rgb(20, 19, 67)",
              }}
              showTickIcon={false}
              dropDownContainerStyle={{
                backgroundColor: "rgb(244, 244, 245)",
                marginTop: 50,
                borderRadius: 25,
                borderColor: "rgb(20, 19, 67)",
                borderWidth: 5,
                borderTopWidth: 0,
                maxHeight: Dimensions.get("window").height * 0.35,
                backgroundColor: "rgb(244, 244, 245)",
              }}
              showArrowIcon={false}
              style={styles.dropdown}
              open={dropdownOpen}
              value={frontDesk.selectedEmployee}
              items={frontDesk.employees}
              setOpen={setDropdownOpen}
              setValue={frontDesk.setSelectedEmployee}
              setItems={frontDesk.setEmployees}
            />
            <NextScreenButton
              screen="VisitorsScreen3"
              disabled={continueButtonDisabled}
              call={frontDesk.makeVisitorsCall}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <HomeButton />
    </>
  );
};

export default VisitorsScreen2;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
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
  dropdown: {
    width: Dimensions.get("window").width * 0.7,
    height: 100,
    borderRadius: 25,
    borderColor: "rgb(20, 19, 67)",
    borderWidth: 5,
    backgroundColor: "rgb(244, 244, 245)",
    marginTop: 50,
    marginBottom: 50,
  },
});
