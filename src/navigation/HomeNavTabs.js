import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from 'react-native-vector-icons';

import Home from '../screens/home';
import MapScreen from '../screens/MapScreen';
import MapListScreen from '../screens/MapListScreen';

const Tab = createBottomTabNavigator();

const HomeNavTabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				tabStyle: {
					backgroundColor: '#2e343d',
				},
				activeTintColor: 'white',
				style: {
					// Remove border top on both android & ios
					borderTopWidth: 0,
					borderTopColor: 'transparent',

					elevation: 0,
					shadowOpacity: 0,
					shadowOffset: {
						height: 0,
					},
					shadowRadius: 0,
				},
			}}
		>
			<Tab.Screen
				name={'Inicio'}
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <Feather name={'home'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name={'Mapa'}
				component={MapScreen}
				options={{
					tabBarIcon: ({ color }) => <Feather name={'map'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name={'MapList'}
				component={MapListScreen}
				options={{
					tabBarIcon: ({ color }) => <Feather name={'map-pin'} size={24} color={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeNavTabs;