import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Dimensions, StyleSheet, View, Image,TextInput, Button, Text } from 'react-native'
import { Feather } from 'react-native-vector-icons';
import MapView from 'react-native-maps'

const HERE_API_KEY = '3FubSE_nFnO32qhU1PzWbjQQahxV9i7fLhUnThbg_3k'
const height2 = Dimensions.get('window').height2
const height = (Dimensions.get('window').height/3)*2
const height1 = (Dimensions.get('window').height1/3)
var textvalue;
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
        backgroundColor : '#2e343d',
        marginTop: (Platform.OS) === 'ios' ? 20 : 0
    }
})

export default class Map extends Component{

    constructor(props){
        super(props);
        this.state = {            
            marginBottom: 1,
            TextHolder: '',
            initialRegion: {
                latitude: 23.2519726,
                longitude: -106.4079802,
                latitudeDelta: 0.0,
                longitudeDelta: 0.012
            }
        }
    }
 
    state = { hackHeight: height2 }
    componentDidMount(){
        this.handleUserLocation();
        setTimeout( () => this.setState({marginBottom : 0}),100)
        setTimeout( () => this.setState({ hackHeight: height+1}), 500);
        setTimeout( () => this.setState({ hackHeight: height}), 1000);
    }

    handleUserLocation =() =>{
        navigator.geolocation.getCurrentPosition(pos => {
            //alert(JSON.stringify(pos))
            this.setState({
                TextHolder: textvalue
            })
            this.setState({
                initialRegion: {
                ...this.state.initialRegion,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
                }
            })
            },
            err => {
            console.log(err);
            alert('Something went wrong! please select location manually')
        })
    }

    getAddressFromCoordinates({ latitude, longitude }) {
        return new Promise(function(resolve) {
          const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`
          fetch(url)
            .then(res => res.json())
            .then((resJson) => {
              // the response had a deeply nested structure :/
              if (resJson
                && resJson.Response
                && resJson.Response.View
                && resJson.Response.View[0]
                && resJson.Response.View[0].Result
                && resJson.Response.View[0].Result[0]) {
                resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
              } else {
                resolve()
              }
            })
            .catch((e) => {
              console.log('Error in getAddressFromCoordinates', e)
              resolve()
            })
        })
      }
    onChangeValue = async initialRegion =>{
        this.setState({
            initialRegion
        })

        let valor = ''
        const coords = {latitude:initialRegion.latitude, longitude:initialRegion.longitude};
        var result  = await this.getAddressFromCoordinates(coords)
        valor = result
        textvalue = valor
        this.setState({
            TextHolder: textvalue
        })
        console.log(this.state.TextHolder)
    }


    render(){
            return(
                <View style= {{ backgroundColor: '#2e343d', flex: 1 }}> 
                    <View>
                        <MapView
                        provider={MapView.PROVIDER_GOOGLE}
                        style = {{flex: 1, marginBottom: this.state.marginBottom, marginTop: 0}, styles.map}
                        showsUserLocation = {true}
                        showsMyLocationButton = {true}
                        initialRegion = {this.state.initialRegion}
                        onRegionChangeComplete = {this.onChangeValue}
                        ref = {ref =>this.map = ref}
                        />
                        <View style={{top:'50%', left: '50%', marginLeft: -24, marginTop: -48, position:'absolute'}}>
                            <Image style={{height: 48, width: 48}} source={require('../../img/pin.png')}/>
                        </View>
                    </View>
                    <View style= {styles.TextContainter}>
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
                                defaultValue={this.state.TextHolder}
                                placeholderTextColor= "white"
                                style={{ paddingHorizontal: 20, fontSize: 15, color: 'white'}}
                            />
                        </View>
                        <Button
                            title="Seleccionar ubicación"
                            onPress={() => {this.props.navigation.navigate('RouteSelectorScreen',{
                                lugarText: this.state.TextHolder,
                                latitud: this.state.initialRegion.latitude,
                                longitud: this.state.initialRegion.longitude
                                })
                            }}
                        />
                    </View>
                </View>
            )
        }
    }