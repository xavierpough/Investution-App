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
    <SafeAreaView style={styles.container}>
        <Text>Home</Text></SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <View style={styles.header}>
    //       <Text style={styles.headerTitle}>Budget - Light</Text>
    //       <Text style={styles.headerCredits}>Credits : 750</Text>
    //     </View>
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>Net Worth</Text>
    //       <View style={styles.netWorth}>
    //         <Text style={styles.netWorthValue}>$25,000.40</Text>
    //         <View style={styles.creditsBadge}>
    //           <Text style={styles.creditsText}>Credits : 750</Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>Credit Store</Text>
    //       <View style={styles.grid}>
    //         {[
    //           { title: 'Cash', value: '$70,000', change: '-21.3 (12%)', changeColor: 'red' },
    //           { title: 'Debt', value: '$4,589', change: '+48.3 (18%)', changeColor: 'green' },
    //           { title: 'Investment', value: '$150,000', change: '+85.3 (82%)', changeColor: 'green' },
    //           { title: 'Property', value: '$47,859', change: '-52.3 (9%)', changeColor: 'red' },
    //         ].map((item, index) => (
    //           <View key={index} style={styles.gridItem}>
    //             <Text style={styles.gridItemTitle}>{item.title}</Text>
    //             <Text style={styles.gridItemValue}>{item.value}</Text>
    //             <Text style={[styles.gridItemChange, { color: item.changeColor }]}>{item.change}</Text>
    //           </View>
    //         ))}
    //       </View>
    //     </View>
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>Financial Summary</Text>
    //       <LineChart
    //         data={{
    //           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //           datasets: [
    //             {
    //               data: [43, 137, 61, 145, 26, 154],
    //               color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`, // optional
    //               strokeWidth: 2, // optional
    //             },
    //             {
    //               data: [60, 48, 177, 78, 96, 204],
    //               color: (opacity = 1) => `rgba(225, 29, 72, ${opacity})`, // optional
    //               strokeWidth: 2, // optional
    //             },
    //           ],
    //         }}
    //         width={styles.chart.width}
    //         height={200}
    //         chartConfig={styles.chartConfig}
    //         bezier
    //         style={styles.chart}
    //       />
    //     </View>
    //     <View style={styles.section}>
    //       <Text style={styles.sectionTitle}>Profile</Text>
    //       <View style={styles.profile}>
    //         {/* <Avatar.Image size={64} source={require('../assets/placeholder-user.jpg')} /> */}
    //         <View style={styles.profileInfo}>
    //           <Text style={styles.profileName}>John Doe</Text>
    //           <Text style={styles.profileEmail}>john@example.com</Text>
    //         </View>
    //       </View>
    //       <Divider style={styles.divider} />
    //       <View style={styles.profileDetails}>
    //         <Text style={styles.profileDetailTitle}>About</Text>
    //         <Text style={styles.profileDetailText}>
    //           I'm a financial analyst with a passion for budgeting and personal finance. I use this app to track my
    //           net worth and investments.
    //         </Text>
    //         <Text style={styles.profileDetailTitle}>Joined</Text>
    //         <Text style={styles.profileDetailText}>June 2021</Text>
    //         <Text style={styles.profileDetailTitle}>Location</Text>
    //         <Text style={styles.profileDetailText}>San Francisco, CA</Text>
    //       </View>
    //     </View>
    //   </ScrollView>
    //   <View style={styles.footer}>
    //     <Button icon="home" mode="text" onPress={() => console.log('Pressed')}>Net Worth</Button>
    //     <Button icon="credit-card" mode="text" onPress={() => console.log('Pressed')}>Credit Store</Button>
    //     <Button icon="bar-chart" mode="text" onPress={() => console.log('Pressed')}>Investment</Button>
    //     <Button icon="account" mode="text" onPress={() => console.log('Pressed')}>Profile</Button>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerCredits: {
    fontSize: 14,
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  netWorth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  netWorthValue: {
    fontSize: 28,
    fontWeight: '700',
  },
  creditsBadge: {
    backgroundColor: '#dbeafe',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  creditsText: {
    color: '#1d4ed8',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 8,
  },
  gridItemTitle: {
    fontSize: 14,
  },
  gridItemValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  gridItemChange: {
    fontSize: 12,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileEmail: {
    fontSize: 14,
    color: '#6b7280',
  },
  divider: {
    marginVertical: 16,
  },
  profileDetails: {
    marginTop: 8,
  },
  profileDetailTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  profileDetailText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  chart: {
    marginVertical: 8,
  },
  chartConfig: {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 8,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  },
});
