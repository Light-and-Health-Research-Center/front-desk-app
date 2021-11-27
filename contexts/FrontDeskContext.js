import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env";

const firebaseApp = initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
});

const functions = getFunctions(firebaseApp);
const visitorsCall = httpsCallable(functions, "visitorsCall");
const deliveriesCall = httpsCallable(functions, "deliveriesCall");

const db = getFirestore();

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
  const [firestoreData, setFirestoreData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [numPackages, setNumPackages] = useState(0);
  const [signatureRequired, setSignatureRequired] = useState(null);
  let timer;

  // Reset Timer Functions
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
    resetResetTimer();
    navigation.navigate("HomeScreen");
  }

  async function getFirestoreData() {
    const querySnapshot = await getDocs(collection(db, "PhoneNumbers"));
    let ret = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      ret.push(data);
    });
    ret.sort((a, b) => a.name > b.name);
    setFirestoreData(ret);
  }

  function makeVisitorsCall() {
    visitorsCall({ userName: userName, employeeID: selectedEmployee });
  }

  function makeDeliveriesCall(_signatureRequired) {
    deliveriesCall({ numPackages, signatureRequired: _signatureRequired });
  }

  function getEmployeeNameFromID(id) {
    for (const e of firestoreData) {
      if (e.id === id) return e.name;
    }
  }

  // Reset Timer
  useEffect(() => {
    if (!onHomeScreen) {
      timer = setTimeout(() => {
        updateResetTimer();
      }, 1000);
    } else {
      clearTimeout(timer);
    }
  }, [onHomeScreen, timeUntilReset]);

  // Fetch Firestore Data
  useEffect(async () => {
    await getFirestoreData();
  }, []);

  // Update Employees State
  useEffect(() => {
    let newEmployees = firestoreData.map((doc) => {
      return {
        label: doc.name,
        value: doc.id,
        containerStyle: {
          height: "auto",
          paddingTop: 20,
          paddingBottom: 20,
        },
      };
    });
    setEmployees(newEmployees);
  }, [firestoreData]);

  const value = {
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
    makeVisitorsCall,
    makeDeliveriesCall,
    getEmployeeNameFromID,
  };
  return (
    <FrontDeskContext.Provider value={value}>
      {children}
    </FrontDeskContext.Provider>
  );
}
