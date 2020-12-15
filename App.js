import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';

import Navigation from './src/navigation';

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView style={{ flex: 1 }}>
				<Navigation />
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create(
	{
		 container:
		 {
			 flex: 1,
			 backgroundColor: '#2e343d',
			 justifyContent: 'center' // Set your own custom Color
		 }
	});

export default App;