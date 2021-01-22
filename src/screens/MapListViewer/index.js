import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image,TextInput } from 'react-native'
import MapView from 'react-native-maps'

function MapScreen({ route, navigation }) {
    const height = (Dimensions.get('window').height)
    const { dorados } = route.params;
    const ruta_dorados = dorados;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
          },
        map: {
            height
        },
        TextContainter: {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            marginTop: (Platform.OS) === 'ios' ? 20 : 0
        }
    })
    return (
        <View>
        <View style= {{ backgroundColor: '#2e343d' }}>
            <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style = {{flex: 1, marginTop: 0}, styles.map}
            showsUserLocation = {true}
            showsMyLocationButton = {true}
            >
                <MapView.Polyline
                coordinates = {ruta_dorados}
                strokeWidth = {2}
                strokeColor = "#E7173F"
                lineCap = "round"
                />
            </MapView>
        </View>
    </View>
    );

    
  }

export default MapScreen;