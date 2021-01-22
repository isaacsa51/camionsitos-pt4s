import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, width, StyleSheet } from 'react-native';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB24UVy1ocICnO7Zsc9NuY04Mn5IBY8Jq0';
const Autocomplete = ({ navigation }) => {
	return (
        <View style={styles.searchBox}>
            <GooglePlacesAutocomplete
                placeholder='¿A donde quieres ir?'
                currentLocation={true}
                currentLocationLabel='Current location'
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'es',
                    components: 'country:mx',
                    origin: "23.2519726,-106.4079802",
                    location: "23.2519726,-106.4079802",
                    radius: 10000
                }}
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                    console.log("GooglePlacesInput -> data", data)
                }}
                onFail={error => console.error(error)}
                debounce={200}
                styles={searchInputStyle}
                
            />
        </View>	
    );
};
const styles = StyleSheet.create({
    searchBox: {
        top: 0,
        flex: 1,
        justifyContent: 'center',
    }
 });

const searchInputStyle={
    container: {
        backgroundColor: '#fff',
        width: width,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 0,
        opacity: 0.9,
        borderRadius: 8
    },
    description: {
        fontWeight: 'bold',
        color: "#007",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        opacity: 0.9,
    },
    predefinedPlacesDescription: {
        color: '#355',
    },
    textInputContainer: {
        height: 50,

    },
        textInput: {
        height: 33,
        fontSize: 16
    }
}

export default Autocomplete 