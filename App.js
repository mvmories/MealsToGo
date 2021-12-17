import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCj7J2FXJ18Jak5-H7bIPYfxAywwjZ9toI",
  authDomain: "mealstogo-cfce2.firebaseapp.com",
  projectId: "mealstogo-cfce2",
  storageBucket: "mealstogo-cfce2.appspot.com",
  messagingSenderId: "288310499819",
  appId: "1:288310499819:web:bd65db7bba8480d8e961ae",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
          <ExpoStatusBar style="auto" />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
