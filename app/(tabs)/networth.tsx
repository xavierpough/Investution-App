import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

export default function Component() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.row}>
        <Text style={styles.sectionTitle}>Net Worth</Text>
          <Text style={styles.netWorthValue}>$25,000.40</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Credit Score</Text>
        <View style={styles.grid}>
          {[
            { title: 'Cash', value: '$70,000', change: '-21.3 (12%)', changeColor: 'red' },
            { title: 'Debt', value: '$4,589', change: '+48.3 (18%)', changeColor: 'green' },
            { title: 'Investment', value: '$150,000', change: '+85.3 (82%)', changeColor: 'green' },
            { title: 'Property', value: '$47,859', change: '-52.3 (9%)', changeColor: 'red' },
          ].map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.gridItemTitle}>{item.title}</Text>
              <Text style={styles.gridItemValue}>{item.value}</Text>
              <Text style={[styles.gridItemChange, { color: item.changeColor }]}>{item.change}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Financial Summary</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [43, 137, 61, 145, 26, 154],
                color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
                strokeWidth: 2,
              },
              {
                data: [60, 48, 177, 78, 96, 204],
                color: (opacity = 1) => `rgba(225, 29, 72, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={320} // from react-native
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.profile}>
          <Avatar.Image size={64} source={{ uri: 'https://via.placeholder.com/150' }} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john@example.com</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.profileDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>About</Text>
            <Text style={styles.detailText}>
              I'm a financial analyst with a passion for budgeting and personal finance. I use this app to track my net
              worth and investments.
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Joined</Text>
            <Text style={styles.detailText}>June 2021</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Location</Text>
            <Text style={styles.detailText}>San Francisco, CA</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F7',
    padding: 16,
  },
  section: {
    backgroundColor: '#ffffff',
    marginBottom: 16,
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
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginBottom: 4,
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
  detailItem: {
    marginBottom: 8,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  detailText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});
