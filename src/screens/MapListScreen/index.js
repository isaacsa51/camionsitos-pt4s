import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GooglePlacesInput from '../../components/GooglePlacesInput'


const GOOGLE_MAPS_APIKEY = 'AIzaSyB24UVy1ocICnO7Zsc9NuY04Mn5IBY8Jq0';

const MapListScreen = ({ navigation }) => {
	return (
		<SafeAreaView >
			<ScrollView keyboardShouldPersistTaps="handled">
				<GooglePlacesInput />
			</ScrollView>
		</SafeAreaView>
	);
};

export default MapListScreen;
