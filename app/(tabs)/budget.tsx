import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { useTailwind } from 'tailwind-rn'; // Import the tw function

const tw = useTailwind()

export default function Component() {
  return (
    <ScrollView style={tw('flex-1 bg-gray-100 p-4')}>
      <View style={tw('bg-white p-4 rounded-lg shadow-md mb-4')}>
        <Text style={tw('text-xl font-bold')}>Net Worth</Text>
        <View style={tw('flex-row items-center justify-between mt-4')}>
          <View style={tw('bg-blue-100 p-4 rounded-lg')}>
            <Text style={tw('text-lg font-semibold')}>Net Worth</Text>
            <Text style={tw('text-2xl font-bold')}>$25,000.40</Text>
          </View>
          <Text style={tw('text-sm text-gray-600')}>Credits : 750</Text>
        </View>
        <View style={tw('flex flex-wrap justify-between mt-4')}>
          {[
            { title: 'Cash', value: '$70,000', change: '-21.3% (12%)', changeColor: 'text-red-500' },
            { title: 'Debt', value: '$4,589', change: '+48.3% (18%)', changeColor: 'text-green-500' },
            { title: 'Investment', value: '$150,000', change: '+85.3% (82%)', changeColor: 'text-green-500' },
            { title: 'Property', value: '$47,859', change: '-52.3% (9%)', changeColor: 'text-red-500' },
          ].map((item, index) => (
            <View key={index} style={tw('w-1/2 bg-gray-50 p-4 rounded-lg shadow-sm mb-4')}>
              <View style={tw('flex-row items-center justify-between')}>
                <Text style={tw('text-lg font-semibold')}>{item.title}</Text>
                <Text style={tw(`text-sm ${item.changeColor}`)}>{item.change}</Text>
              </View>
              <Text style={tw('text-2xl font-bold')}>{item.value}</Text>
            </View>
          ))}
        </View>
        <View style={tw('mt-6')}>
          <Text style={tw('text-lg font-semibold')}>Financial Summary</Text>
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
            width={320}
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
            style={tw('mt-4 rounded-lg')}
          />
        </View>
      </View>
      <View style={tw('bg-white p-4 rounded-lg shadow-md mb-4')}>
        <Text style={tw('text-xl font-bold')}>Budget</Text>
        <View style={tw('flex-row items-center justify-between mt-4')}>
          <View style={tw('bg-blue-100 p-4 rounded-lg')}>
            <Text style={tw('text-lg font-semibold')}>Total Budget</Text>
            <Text style={tw('text-2xl font-bold')}>$25,000.40</Text>
          </View>
          <Text style={tw('text-sm text-gray-600')}>Credits : 750</Text>
        </View>
        <View style={tw('flex-row justify-between mt-4')}>
          {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((period, index) => (
            <Button key={index} mode="outlined" style={tw('flex-1 mr-2')}>
              {period}
            </Button>
          ))}
        </View>
        <View style={tw('flex flex-wrap justify-between mt-4')}>
          <View style={tw('w-1/2 bg-green-100 p-4 rounded-lg mb-4')}>
            <Text style={tw('text-lg font-semibold')}>Total Spences</Text>
            <Text style={tw('text-2xl font-bold')}>$20,000</Text>
          </View>
          <View style={tw('w-1/2 bg-red-100 p-4 rounded-lg mb-4')}>
            <Text style={tw('text-lg font-semibold')}>Remaining</Text>
            <Text style={tw('text-2xl font-bold')}>$17,000</Text>
          </View>
        </View>
        <View style={tw('mt-6')}>
          <Text style={tw('text-lg font-semibold')}>Expenses Summary</Text>
          <PieChart
            data={[
              { name: 'Jan', population: 111, color: '#2563eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Feb', population: 157, color: '#e11d48', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Mar', population: 129, color: '#34d399', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Apr', population: 150, color: '#f59e0b', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'May', population: 119, color: '#3b82f6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Jun', population: 72, color: '#10b981', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            ]}
            width={320}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            style={tw('mt-4 rounded-lg')}
          />
        </View>
        <View style={tw('mt-6')}>
          <Text style={tw('text-lg font-semibold')}>Expense Categories</Text>
          <Text style={tw('text-sm text-gray-600 mb-4 self-end')}>See All</Text>
          {[
            { title: 'Food', amount: '$699.00' },
            { title: 'Macbook Pro M1', amount: '$1,499.00'},
            { title: 'House', amount: '$65,000.00'},
            { title: 'Car', amount: '$20,000.00' },
          ].map((item, index) => (
            <View key={index} style={tw('flex-row items-center justify-between bg-gray-50 p-4 rounded-lg mb-2')}>
              <View style={tw('flex-row items-center')}>
                {/* <item.icon style={tw('w-6 h-6 mr-2')} /> */}
                <Text style={tw('text-lg font-semibold')}>{item.title}</Text>
              </View>
              <Text style={tw('text-lg font-bold')}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
