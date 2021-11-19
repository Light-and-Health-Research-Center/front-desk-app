import React, { useContext, createContext, useState, useEffect } from "react";
import { API_URL } from "../env";
import { useNavigation } from "@react-navigation/native";

const FrontDeskContext = createContext({});
const MAX_RESET_TIME = 600; // seconds

export function useFrontDesk() {
  return useContext(FrontDeskContext);
}

export function FrontDeskProvider({ children }) {
  const navigation = useNavigation();
  const [onHomeScreen, setOnHomeScreen] = useState(true);
  const [timeUntilReset, setTimeUntilReset] = useState(MAX_RESET_TIME);
  const [userName, setUserName] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [employees, setEmployees] = useState([
    {
      label: "Michael Morrison",
      value: "Michael Morrison",
      containerStyle: {
        height: "auto",
        paddingTop: 20,
        paddingBottom: 20,
      },
    },
    {
      label: "Allison Thayer",
      value: "Allison Thayer",
      containerStyle: {
        height: "auto",
        paddingTop: 20,
        paddingBottom: 20,
      },
    },
  ]);
  const [numPackages, setNumPackages] = useState(0);
  const [signatureRequired, setSignatureRequired] = useState(null);
  let timer;

  function updateResetTimer() {
    if (timeUntilReset <= 0) {
      backToHome();
    } else {
      setTimeUntilReset((timeUntilReset) => timeUntilReset - 1);
    }
  }

  function resetResetTimer() {
    setTimeUntilReset(MAX_RESET_TIME);
  }

  function resetState() {
    setOnHomeScreen(true);
    setUserName("");
    setSelectedEmployee("");
    setNumPackages(0);
    setSignatureRequired(null);
  }

  function backToHome() {
    resetState();
    setTimeUntilReset(MAX_RESET_TIME);
    navigation.navigate("HomeScreen");
  }

  async function testAPI() {
    try {
      const res = await fetch(`${API_URL}/test`);
      console.log("/test route success");
    } catch (err) {
      console.log("Error" + err);
    }
  }

  useEffect(() => {
    if (!onHomeScreen) {
      timer = setTimeout(() => {
        updateResetTimer();
      }, 1000);
    } else {
      clearTimeout(timer);
    }
  }, [onHomeScreen, timeUntilReset]);

  const value = {
    testAPI,
    setOnHomeScreen,
    backToHome,
    userName,
    setUserName,
    selectedEmployee,
    setSelectedEmployee,
    employees,
    setEmployees,
    numPackages,
    setNumPackages,
    signatureRequired,
    setSignatureRequired,
  };
  return (
    <FrontDeskContext.Provider value={value}>
      {children}
    </FrontDeskContext.Provider>
  );
}
