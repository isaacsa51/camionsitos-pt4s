import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from 'react-native-vector-icons';

function RouteSelectorScreen({ route, navigation }) {
	const { lugarText, latitud, longitud } = route.params;
	const texto = lugarText;
	const latiDestino = latitud;
	const longDestino = longitud;
	console.log(latiDestino)
	console.log(longDestino)
	
    const styles = StyleSheet.create(
        {
             container:
             {
                 backgroundColor: '#282b33',
                 justifyContent: 'center' // Set your own custom Color
             }
        });
	return (
		<View style={{ flex: 1, backgroundColor: '#282b33', }}>
			<SafeAreaView style={styles.container}>
                <View>
                    <View
						style={{
							flexDirection: 'row',
							backgroundColor: '#2e343d',
							borderRadius: 40,
							alignItems: 'center',
							paddingVertical: 10,
							paddingHorizontal: 20,
							marginTop: 30,
						}}
					>
						<Feather name="search" size={22} style={{ color: '#7b8085' }} />
						<TouchableOpacity>
							<TextInput style={{ paddingHorizontal: 20, fontSize: 15, color: 'white', }}>
								¿A dónde quieres ir?
							</TextInput>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: '#2e343d',
							borderRadius: 40,
							alignItems: 'center',
							paddingVertical: 10,
							paddingHorizontal: 20,
							marginTop: 30,
						}}
					>
						<Feather name="search" size={22} style={{ color: '#7b8085' }} />
						<TouchableOpacity>
						<TextInput style={{ paddingHorizontal: 20, fontSize: 15, color: 'white', }}>
							{texto}
						</TextInput>
							
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}

export default RouteSelectorScreen;