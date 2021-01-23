import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, width, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB24UVy1ocICnO7Zsc9NuY04Mn5IBY8Jq0';
const SearchScreen = ({ navigation }) => {
	return (
        <View style={styles.searchBox}>
            <GooglePlacesAutocomplete
                placeholder='¿A donde quieres ir?'
                placeholderTextColor= '#aaa'
                currentLocation={true}
                currentLocationLabel='Ubicación Actual'
                fetchDetails = {true}
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
                    //console.log("GooglePlacesInput -> data", details),
                    navigation.navigate('RouteSelectorScreen',{
                        lugarText: data.description,
                        latitud: details.geometry.location.lat,
                        longitud: details.geometry.location.lng
                    })
                }}
                onFail={error => console.error(error)}
                debounce={200}
                styles={searchInputStyle}
                
            />
           <TouchableOpacity
				onPress={() => navigation.navigate('MapScreen')}
				    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 66,
                        backgroundColor: '#5facdb',
				    }}
			    >
                <Text>
                    Seleccionar en el mapa
                </Text>
			</TouchableOpacity>
        </View>	
    );
};
const styles = StyleSheet.create({
    searchBox: {
        top: 0,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#282b33',
    }
 });

const searchInputStyle={               
    container: {
        backgroundColor: '#282b33',
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
        color: "#fff",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        opacity: 0.9,
        backgroundColor: '#282b33',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#aaa',
      },
    row: {
        backgroundColor: '#282b33',
        padding: 13,
        height: 44,
        flexDirection: 'row',
      },
    predefinedPlacesDescription: {
        color: '#fff',
        backgroundColor: '#282b33',
    },
    textInputContainer: {
        height: 50,
        backgroundColor: '#282b33',
    },
    textInput: {
        flexDirection: 'row',
        backgroundColor: '#2e343d',
        borderRadius: 40,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        color:'white'
    }
}

export default SearchScreen 