import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={{ fontSize: 50 }}>Home</Text>
		</SafeAreaView>
	);
};

export default Home;
