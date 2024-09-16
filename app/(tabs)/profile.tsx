import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Button, Divider } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function HomeTab() {
  const [loaded] = useFonts({
    // SFPro: require('../assets/fonts/SF-Pro.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
        <Text>Profile Section</Text></SafeAreaView>
  );
}

