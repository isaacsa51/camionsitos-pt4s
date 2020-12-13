import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<App
			ref={(navigator) => {
				setNavigator(navigator);
			}}
		/>
	);
};
