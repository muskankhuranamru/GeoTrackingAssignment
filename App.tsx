import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NativeModules} from 'react-native';
import MapsComponent from './src/components/MapComponent';

const {BatteryOptimization} = NativeModules;

const App: React.FC = () => {
  const [batteryOptimizationStatus, setBatteryOptimizationStatus] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    BatteryOptimization.getBatteryOptimizationStatus((status: boolean) => {
      console.log('STATUS', status);
      setBatteryOptimizationStatus(status);
    });
  }, []);

  useEffect(() => {
    console.log('STATUS', batteryOptimizationStatus);
  }, [batteryOptimizationStatus]);

  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={{color: 'black'}}>
          Battery Optimization Status:{' '}
          {batteryOptimizationStatus ? 'On' : 'Off'}
        </Text>
      </View>
    </View>
  );
};

export default App;
