import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, StatusBar, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Feather } from 'react-native-vector-icons';

const styles = StyleSheet.create(
	{
		 container:
		 {
			 flex: 1,
			 backgroundColor: '#282b33',
			 justifyContent: 'center' // Set your own custom Color
		 }
	});

const Home = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={styles.container}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 40,
					}}
				>
					<MaterialCommunityIcons name="menu" size={30} color="#7b8085" style={{ width: 20 }} />
					<MaterialCommunityIcons
						name="account-circle"
						size={30}
						color="#7b8085"
						style={{
							flexDirection: 'row',
							marginLeft: 'auto',
						}}
					/>
				</View>

				<View style={{ paddingHorizontal: 40, marginTop: 25 }}>
					<Text
						style={{
							fontSize: 40,
							color: '#eee',
							fontWeight: 'bold',
						}}
					>
						Bienvenido
					</Text>

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
						<TextInput
							placeholder="¿A dónde quieres ir?"
							style={{ paddingHorizontal: 20, fontSize: 15, color: 'white' }}
						/>
					</View>

					<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginRight: -40, marginTop: 30 }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('MapScreen')}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 66,
								width: 66,
								borderRadius: 50,
								backgroundColor: '#5facdb',
							}}
						>
							<MaterialCommunityIcons name="train-variant" color="white" size={32} />
						</TouchableOpacity>

						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 66,
								width: 66,
								borderRadius: 50,
								backgroundColor: '#ff5c83',
								marginHorizontal: 22,
							}}
						>
							<MaterialCommunityIcons name="map" color="white" size={32} />
						</View>

						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 66,
								width: 66,
								borderRadius: 50,
								backgroundColor: '#ffa06c',
							}}
						>
							<MaterialCommunityIcons name="bus" color="white" size={32} />
						</View>

						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 66,
								width: 66,
								borderRadius: 50,
								backgroundColor: '#bb32fe',
								marginLeft: 22,
							}}
						>
							<MaterialCommunityIcons name="dots-horizontal" color="white" size={32} />
						</View>
					</ScrollView>

					<Text
						style={{
							color: '#72767b',
							marginTop: 50,
							fontSize: 17,
						}}
					>
						Historial
					</Text>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{ marginHorizontal: -40, marginTop: 30 }}
					>
						<View
							style={{
								backgroundColor: '#2e343d',
								height: 200,
								width: 190,
								borderRadius: 15,
								padding: 5,
							}}
						>
							<Image
								source={require('../../img/google_maps_multiple_destinations_desktop.jpg' )}
								style={{ width: 180, height: 220, borderRadius: 10, height: 130 }}
							/>
							<View
								style={{
									flexDirection: 'row',
									width: 150,
									alignItems: 'center',
								}}
							>
								<View
									style={{
										paddingHorizontal: 5,
										paddingVertical: 5,
									}}
								>
									<Text
										style={{
											fontSize: 11,
											color: '#7b8085',
										}}
									>
										Lorem impsum dolor sit amet, consectetuer adipscing elit,
									</Text>
								</View>
								<MaterialCommunityIcons name="map-marker-multiple" size={25} color="#ff5c83" />
							</View>
						</View>

						<View
							style={{
								backgroundColor: '#2e343d',
								height: 200,
								width: 190,
								borderRadius: 15,
								padding: 5,
								marginHorizontal: 20,
							}}
						>
							<Image
								source={require('../../img/google_maps_multiple_destinations_desktop.jpg' )}
								style={{ width: 180, height: 220, borderRadius: 10, height: 130 }}
							/>
							<View
								style={{
									flexDirection: 'row',
									width: 150,
									alignItems: 'center',
								}}
							>
								<View
									style={{
										paddingHorizontal: 5,
										paddingVertical: 5,
									}}
								>
									<Text
										style={{
											fontSize: 11,
											color: '#7b8085',
										}}
									>
										Lorem impsum dolor sit amet, consectetuer adipscing elit,
									</Text>
								</View>
								<MaterialCommunityIcons name="map-marker-multiple" size={25} color="#5facdb" />
							</View>
						</View>

						<View
							style={{
								backgroundColor: '#2e343d',
								height: 200,
								width: 190,
								borderRadius: 15,
								padding: 5,
							}}
						>
							<Image
								source={require('../../img/google_maps_multiple_destinations_desktop.jpg' )}
								style={{ width: 180, height: 220, borderRadius: 10, height: 130 }}
							/>
							<View
								style={{
									flexDirection: 'row',
									width: 150,
									alignItems: 'center',
								}}
							>
								<View
									style={{
										paddingHorizontal: 5,
										paddingVertical: 5,
									}}
								>
									<Text
										style={{
											fontSize: 11,
											color: '#7b8085',
										}}
									>
										Lorem impsum dolor sit amet, consectetuer adipscing elit,
									</Text>
								</View>
								<MaterialCommunityIcons name="map-marker-multiple" size={25} color="#bb32fe" />
							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Home;
