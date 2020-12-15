import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GooglePlacesInput from '../../components/GooglePlacesInput'


const GOOGLE_MAPS_APIKEY = 'AIzaSyB24UVy1ocICnO7Zsc9NuY04Mn5IBY8Jq0';

const MapListScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView keyboardShouldPersistTaps="handled" >
				<GooglePlacesInput />
			</ScrollView>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create(
	{
		 container:
		 {
			 flex: 1,
			 backgroundColor: '#282b33',
			 justifyContent: 'center' // Set your own custom Color
		 }
	});


export default MapListScreen;
