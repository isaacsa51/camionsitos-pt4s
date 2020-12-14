import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View } from 'react-native';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB24UVy1ocICnO7Zsc9NuY04Mn5IBY8Jq0';
const Autocomplete = ({ navigation }) => {
	return (
        <View style={{ flex: 1 }}>
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
                styles={{
                    textInputContainer: {
                        backgroundColor: '#fff',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 40,
                        borderBottomWidth: 1,
                        color: '#000',
                        borderBottomColor: '#dedede'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                    listView: {
                        backgroundColor: '#fff',
                        borderWidth: 0.5,
                        borderColor: '#dedede',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.05,
                        shadowRadius: 10,
                        elevation: 4
                    }
                }}
                
            />
        </View>	
    );
};


export default Autocomplete 