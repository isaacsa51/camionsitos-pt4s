import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeNavTabs from './HomeNavTabs.js';
import MapScreen from '../screens/MapScreen';
import MapListScreen from '../screens/MapListScreen';
import MapListViewer from '../screens/MapListViewer';

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeNavTabs" component={HomeNavTabs} />
				<Stack.Screen name="MapScreen" component={MapScreen} />
				<Stack.Screen name="MapListScreen" component={MapListScreen} />
				<Stack.Screen name="MapListViewer" component={MapListViewer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;

