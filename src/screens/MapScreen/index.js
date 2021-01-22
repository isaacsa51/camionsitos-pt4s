import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
import Map from '../../components/Map';

const MapScreen = ({ navigation }) => {
	return (
		<SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
			<Map />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#282b33',
	}});

export default MapScreen;