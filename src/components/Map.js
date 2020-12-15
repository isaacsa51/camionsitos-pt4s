import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native'
import MapView from 'react-native-maps'

const GOOGLE_MAPS_APIKEY = 'AIzaSyB24UVy1ocICnO7Zsc9NuY04Mn5IBY8Jq0';
const HERE_API_KEY = '3FubSE_nFnO32qhU1PzWbjQQahxV9i7fLhUnThbg_3k'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const ruta_dorados = [
    { longitude: -106.41979, latitude: 23.20282 },
    { longitude: -106.41995, latitude: 23.20364 },
    { longitude: -106.42011, latitude: 23.20432 },
          { longitude: -106.42019, latitude: 23.20472 },
          { longitude: -106.42022, latitude: 23.20484 },
          { longitude: -106.42035, latitude: 23.20548 },
          { longitude: -106.42039, latitude: 23.20566 },
          { longitude: -106.42046, latitude: 23.20602 },
          { longitude: -106.42033, latitude: 23.20617 },
          { longitude: -106.42, latitude: 23.20663 },
          { longitude: -106.41974, latitude: 23.20697 },
          { longitude: -106.41939, latitude: 23.20744 },
          { longitude: -106.41932, latitude: 23.20751 },
          { longitude: -106.41888, latitude: 23.20815 },
          { longitude: -106.41866, latitude: 23.20839 },
          { longitude: -106.41835, latitude: 23.20886 },
          { longitude: -106.41806, latitude: 23.2091 },
          { longitude: -106.41766, latitude: 23.2093 },
          { longitude: -106.41748, latitude: 23.20941 },
          { longitude: -106.41733, latitude: 23.20952 },
          { longitude: -106.41725, latitude: 23.20962 },
          { longitude: -106.41722, latitude: 23.20969 },
          { longitude: -106.41714, latitude: 23.20982 },
          { longitude: -106.41711, latitude: 23.20993 },
          { longitude: -106.41666, latitude: 23.21103 },
          { longitude: -106.41662, latitude: 23.21119 },
          { longitude: -106.41637, latitude: 23.21215 },
          { longitude: -106.41619, latitude: 23.21296 },
          { longitude: -106.41614, latitude: 23.21308 },
          { longitude: -106.41595, latitude: 23.21386 },
          { longitude: -106.4159, latitude: 23.21404 },
          { longitude: -106.41588, latitude: 23.21416 },
          { longitude: -106.41587, latitude: 23.21428 },
          { longitude: -106.41586, latitude: 23.21439 },
          { longitude: -106.41586, latitude: 23.21451 },
          { longitude: -106.41586, latitude: 23.21465 },
          { longitude: -106.41587, latitude: 23.2148 },
          { longitude: -106.41588, latitude: 23.21488 },
          { longitude: -106.41589, latitude: 23.21496 },
          { longitude: -106.41591, latitude: 23.21503 },
          { longitude: -106.41594, latitude: 23.21515 },
          { longitude: -106.41598, latitude: 23.21529 },
          { longitude: -106.41602, latitude: 23.21541 },
          { longitude: -106.41624, latitude: 23.21592 },
          { longitude: -106.41631, latitude: 23.21612 },
          { longitude: -106.41661, latitude: 23.21683 },
          { longitude: -106.41692, latitude: 23.2175 },
          { longitude: -106.41716, latitude: 23.218 },
          { longitude: -106.41748, latitude: 23.21873 },
          { longitude: -106.41775, latitude: 23.21928 },
          { longitude: -106.41797, latitude: 23.21981 },
          { longitude: -106.41822, latitude: 23.22037 },
          { longitude: -106.41858, latitude: 23.22119 },
          { longitude: -106.41883, latitude: 23.2217 },
          { longitude: -106.41885, latitude: 23.22175 },
          { longitude: -106.41904, latitude: 23.22212 },
          { longitude: -106.41943, latitude: 23.22295 },
          { longitude: -106.41984, latitude: 23.22388 },
          { longitude: -106.41991, latitude: 23.22406 },
          { longitude: -106.42003, latitude: 23.22434 },
          { longitude: -106.42007, latitude: 23.22442 },
          { longitude: -106.42068, latitude: 23.22578 },
          { longitude: -106.42129, latitude: 23.22702 },
          { longitude: -106.42136, latitude: 23.22716 },
          { longitude: -106.42155, latitude: 23.22755 },
          { longitude: -106.42159, latitude: 23.22765 },
          { longitude: -106.42166, latitude: 23.22784 },
          { longitude: -106.42168, latitude: 23.2279 },
          { longitude: -106.42171, latitude: 23.22799 },
          { longitude: -106.42178, latitude: 23.22813 },
          { longitude: -106.42196, latitude: 23.22859 },
          { longitude: -106.42205, latitude: 23.22887 },
          { longitude: -106.42215, latitude: 23.22924 },
          { longitude: -106.42222, latitude: 23.22953 },
          { longitude: -106.42228, latitude: 23.22979 },
          { longitude: -106.42237, latitude: 23.23024 },
          { longitude: -106.4224, latitude: 23.23039 },
          { longitude: -106.42247, latitude: 23.23085 },
          { longitude: -106.42254, latitude: 23.23118 },
          { longitude: -106.42255, latitude: 23.23126 },
          { longitude: -106.4226, latitude: 23.23152 },
          { longitude: -106.42268, latitude: 23.23185 },
          { longitude: -106.42276, latitude: 23.23224 },
          { longitude: -106.42283, latitude: 23.23259 },
          { longitude: -106.42289, latitude: 23.23289 },
          { longitude: -106.4229, latitude: 23.23295 },
          { longitude: -106.42291, latitude: 23.233 },
          { longitude: -106.4231, latitude: 23.23381 },
          { longitude: -106.42318, latitude: 23.23421 },
          { longitude: -106.42329, latitude: 23.23462 },
          { longitude: -106.42332, latitude: 23.23474 },
          { longitude: -106.42336, latitude: 23.23487 },
          { longitude: -106.42339, latitude: 23.23503 },
          { longitude: -106.42341, latitude: 23.23515 },
          { longitude: -106.42342, latitude: 23.23536 },
          { longitude: -106.42342, latitude: 23.23548 },
          { longitude: -106.42338, latitude: 23.23596 },
          { longitude: -106.42336, latitude: 23.23621 },
          { longitude: -106.42331, latitude: 23.23643 },
          { longitude: -106.42327, latitude: 23.23657 },
          { longitude: -106.42319, latitude: 23.23693 },
          { longitude: -106.42315, latitude: 23.23709 },
          { longitude: -106.42311, latitude: 23.2373 },
          { longitude: -106.42303, latitude: 23.23769 },
          { longitude: -106.423, latitude: 23.23785 },
          { longitude: -106.42284, latitude: 23.23855 },
          { longitude: -106.42275, latitude: 23.23892 },
          { longitude: -106.42264, latitude: 23.23936 },
          { longitude: -106.42251, latitude: 23.24001 },
          { longitude: -106.42245, latitude: 23.24026 },
          { longitude: -106.42222, latitude: 23.24124 },
          { longitude: -106.4222, latitude: 23.24132 },
          { longitude: -106.42215, latitude: 23.24153 },
          { longitude: -106.42213, latitude: 23.2416 },
          { longitude: -106.42184, latitude: 23.2429 },
          { longitude: -106.4217, latitude: 23.24346 },
          { longitude: -106.42157, latitude: 23.2441 },
          { longitude: -106.42137, latitude: 23.24491 },
          { longitude: -106.4213, latitude: 23.24523 },
          { longitude: -106.42129, latitude: 23.24535 },
          { longitude: -106.42107, latitude: 23.24632 },
          { longitude: -106.42102, latitude: 23.2465 },
          { longitude: -106.42099, latitude: 23.24658 },
          { longitude: -106.42095, latitude: 23.24676 },
          { longitude: -106.42069, latitude: 23.24785 },
          { longitude: -106.42058, latitude: 23.24836 },
          { longitude: -106.42049, latitude: 23.24878 },
          { longitude: -106.42046, latitude: 23.24891 },
          { longitude: -106.42037, latitude: 23.24928 },
          { longitude: -106.42032, latitude: 23.24952 },
          { longitude: -106.42028, latitude: 23.2497 },
          { longitude: -106.42017, latitude: 23.25014 },
          { longitude: -106.42024, latitude: 23.25022 },
          { longitude: -106.42027, latitude: 23.25026 },
          { longitude: -106.4203, latitude: 23.25029 },
          { longitude: -106.42034, latitude: 23.25033 },
          { longitude: -106.42035, latitude: 23.25034 },
          { longitude: -106.42036, latitude: 23.25035 },
          { longitude: -106.42037, latitude: 23.25036 },
          { longitude: -106.4204, latitude: 23.25037 },
          { longitude: -106.42043, latitude: 23.25038 },
          { longitude: -106.42044, latitude: 23.25039 },
          { longitude: -106.42047, latitude: 23.25039 },
          { longitude: -106.42049, latitude: 23.25039 },
          { longitude: -106.42052, latitude: 23.25039 },
          { longitude: -106.42054, latitude: 23.25039 },
          { longitude: -106.42057, latitude: 23.25039 },
          { longitude: -106.4206, latitude: 23.25038 },
          { longitude: -106.42063, latitude: 23.25036 },
          { longitude: -106.42066, latitude: 23.25035 },
          { longitude: -106.42072, latitude: 23.25031 },
          { longitude: -106.42081, latitude: 23.25023 },
          { longitude: -106.42092, latitude: 23.25014 },
          { longitude: -106.42112, latitude: 23.24999 },
          { longitude: -106.42131, latitude: 23.24987 },
          { longitude: -106.42148, latitude: 23.24977 },
          { longitude: -106.42167, latitude: 23.24967 },
          { longitude: -106.42172, latitude: 23.24965 },
          { longitude: -106.42178, latitude: 23.24962 },
          { longitude: -106.42183, latitude: 23.2496 },
          { longitude: -106.42185, latitude: 23.24959 },
          { longitude: -106.42189, latitude: 23.24958 },
          { longitude: -106.42201, latitude: 23.24955 },
          { longitude: -106.42212, latitude: 23.24952 },
          { longitude: -106.42228, latitude: 23.24948 },
          { longitude: -106.42248, latitude: 23.24943 },
          { longitude: -106.42281, latitude: 23.24936 },
          { longitude: -106.42375, latitude: 23.24915 },
          { longitude: -106.42402, latitude: 23.2491 },
          { longitude: -106.42417, latitude: 23.24906 },
          { longitude: -106.42435, latitude: 23.24903 },
          { longitude: -106.42443, latitude: 23.24916 },
          { longitude: -106.42448, latitude: 23.24929 },
          { longitude: -106.42451, latitude: 23.24942 },
          { longitude: -106.42453, latitude: 23.24953 },
          { longitude: -106.42454, latitude: 23.24965 },
          { longitude: -106.42452, latitude: 23.24981 },
          { longitude: -106.42436, latitude: 23.25067 },
          { longitude: -106.42433, latitude: 23.2508 },
          { longitude: -106.4243, latitude: 23.25098 },
          { longitude: -106.42411, latitude: 23.25174 },
          { longitude: -106.42402, latitude: 23.25222 },
          { longitude: -106.42394, latitude: 23.25259 },
          { longitude: -106.42385, latitude: 23.25298 },
          { longitude: -106.42374, latitude: 23.25353 },
          { longitude: -106.42364, latitude: 23.254 },
          { longitude: -106.42355, latitude: 23.25438 },
          { longitude: -106.4235, latitude: 23.25465 },
          { longitude: -106.42336, latitude: 23.25531 },
          { longitude: -106.42338, latitude: 23.25541 },
          { longitude: -106.42337, latitude: 23.25541 },
          { longitude: -106.42336, latitude: 23.25541 },
          { longitude: -106.42336, latitude: 23.25542 },
          { longitude: -106.42335, latitude: 23.25542 },
          { longitude: -106.42334, latitude: 23.25542 },
          { longitude: -106.42334, latitude: 23.25543 },
          { longitude: -106.42333, latitude: 23.25543 },
          { longitude: -106.42332, latitude: 23.25544 },
          { longitude: -106.42331, latitude: 23.25544 },
          { longitude: -106.42331, latitude: 23.25545 },
          { longitude: -106.4233, latitude: 23.25546 },
          { longitude: -106.42329, latitude: 23.25547 },
          { longitude: -106.42329, latitude: 23.25548 },
          { longitude: -106.42328, latitude: 23.25548 },
          { longitude: -106.42328, latitude: 23.25549 },
          { longitude: -106.42328, latitude: 23.2555 },
          { longitude: -106.42327, latitude: 23.25551 },
          { longitude: -106.42327, latitude: 23.25552 },
          { longitude: -106.42327, latitude: 23.25554 },
          { longitude: -106.42327, latitude: 23.25555 },
          { longitude: -106.42327, latitude: 23.25556 },
          { longitude: -106.42327, latitude: 23.25557 },
          { longitude: -106.42327, latitude: 23.25558 },
          { longitude: -106.42327, latitude: 23.25559 },
          { longitude: -106.42328, latitude: 23.25559 },
          { longitude: -106.42328, latitude: 23.2556 },
          { longitude: -106.42328, latitude: 23.25561 },
          { longitude: -106.42329, latitude: 23.25561 },
          { longitude: -106.42329, latitude: 23.25562 },
          { longitude: -106.4233, latitude: 23.25563 },
          { longitude: -106.42331, latitude: 23.25564 },
          { longitude: -106.42332, latitude: 23.25565 },
          { longitude: -106.42334, latitude: 23.25566 },
          { longitude: -106.42335, latitude: 23.25567 },
          { longitude: -106.42336, latitude: 23.25567 },
          { longitude: -106.42337, latitude: 23.25567 },
          { longitude: -106.42338, latitude: 23.25568 },
          { longitude: -106.42339, latitude: 23.25568 },
          { longitude: -106.4234, latitude: 23.25568 },
          { longitude: -106.42341, latitude: 23.25568 },
          { longitude: -106.42342, latitude: 23.25568 },
          { longitude: -106.42343, latitude: 23.25568 },
          { longitude: -106.42344, latitude: 23.25568 },
          { longitude: -106.42345, latitude: 23.25568 },
          { longitude: -106.42346, latitude: 23.25568 },
          { longitude: -106.42347, latitude: 23.25567 },
          { longitude: -106.42348, latitude: 23.25567 },
          { longitude: -106.42349, latitude: 23.25567 },
          { longitude: -106.4235, latitude: 23.25572 },
          { longitude: -106.42351, latitude: 23.25575 },
          { longitude: -106.42352, latitude: 23.25577 },
          { longitude: -106.42353, latitude: 23.25578 },
          { longitude: -106.42355, latitude: 23.25581 },
          { longitude: -106.42357, latitude: 23.25583 },
          { longitude: -106.42367, latitude: 23.25591 },
          { longitude: -106.42372, latitude: 23.25596 },
          { longitude: -106.42392, latitude: 23.25612 },
          { longitude: -106.4243, latitude: 23.25648 },
          { longitude: -106.42444, latitude: 23.25665 },
          { longitude: -106.42506, latitude: 23.25747 },
          { longitude: -106.42514, latitude: 23.25759 },
          { longitude: -106.42541, latitude: 23.25795 },
          { longitude: -106.42554, latitude: 23.25811 },
          { longitude: -106.42578, latitude: 23.25841 },
          { longitude: -106.42615, latitude: 23.25892 },
          { longitude: -106.42632, latitude: 23.25915 },
          { longitude: -106.4264, latitude: 23.25926 },
          { longitude: -106.42668, latitude: 23.25963 },
          { longitude: -106.42723, latitude: 23.26034 },
          { longitude: -106.42754, latitude: 23.26066 },
          { longitude: -106.42766, latitude: 23.26076 },
          { longitude: -106.42769, latitude: 23.26078 },
          { longitude: -106.42773, latitude: 23.26081 },
          { longitude: -106.42827, latitude: 23.2613 },
          { longitude: -106.42937, latitude: 23.26227 },
          { longitude: -106.42941, latitude: 23.26231 },
          { longitude: -106.42961, latitude: 23.26249 },
          { longitude: -106.42993, latitude: 23.2628 },
          { longitude: -106.42995, latitude: 23.26282 },
          { longitude: -106.42999, latitude: 23.26286 },
          { longitude: -106.43, latitude: 23.26288 },
          { longitude: -106.43012, latitude: 23.26299 },
          { longitude: -106.43041, latitude: 23.26326 },
          { longitude: -106.43073, latitude: 23.26356 },
          { longitude: -106.43106, latitude: 23.26386 },
          { longitude: -106.43136, latitude: 23.26395 },
          { longitude: -106.43136, latitude: 23.26396 },
          { longitude: -106.43137, latitude: 23.26396 },
          { longitude: -106.43137, latitude: 23.26397 },
          { longitude: -106.43138, latitude: 23.26397 },
          { longitude: -106.43139, latitude: 23.26397 },
          { longitude: -106.4314, latitude: 23.26397 },
          { longitude: -106.43141, latitude: 23.26397 },
          { longitude: -106.43142, latitude: 23.26397 },
          { longitude: -106.43142, latitude: 23.26396 },
          { longitude: -106.43143, latitude: 23.26396 },
          { longitude: -106.43144, latitude: 23.26396 },
          { longitude: -106.43144, latitude: 23.26395 },
          { longitude: -106.43144, latitude: 23.26394 },
          { longitude: -106.43145, latitude: 23.26394 },
          { longitude: -106.43145, latitude: 23.26393 },
          { longitude: -106.43145, latitude: 23.26392 },
          { longitude: -106.43145, latitude: 23.26391 },
          { longitude: -106.43144, latitude: 23.2639 },
          { longitude: -106.43144, latitude: 23.26389 },
          { longitude: -106.43143, latitude: 23.26389 },
          { longitude: -106.43143, latitude: 23.26388 },
          { longitude: -106.4315, latitude: 23.26384 },
          { longitude: -106.43109, latitude: 23.26348 },
          { longitude: -106.43073, latitude: 23.26316 },
          { longitude: -106.43036, latitude: 23.26283 },
          { longitude: -106.43074, latitude: 23.26246 },
          { longitude: -106.43076, latitude: 23.26252 },
          { longitude: -106.43078, latitude: 23.26256 },
          { longitude: -106.4308, latitude: 23.26259 },
          { longitude: -106.43084, latitude: 23.26263 },
          { longitude: -106.43088, latitude: 23.26266 },
          { longitude: -106.4309, latitude: 23.26267 },
          { longitude: -106.43092, latitude: 23.26269 },
          { longitude: -106.43096, latitude: 23.26269 },
          { longitude: -106.43099, latitude: 23.26269 },
          { longitude: -106.43121, latitude: 23.26263 },
          { longitude: -106.43136, latitude: 23.26258 },
          { longitude: -106.43146, latitude: 23.26255 },
          { longitude: -106.43207, latitude: 23.26236 },
          { longitude: -106.43216, latitude: 23.26232 },
          { longitude: -106.43219, latitude: 23.26231 },
          { longitude: -106.43223, latitude: 23.2623 },
          { longitude: -106.43226, latitude: 23.2623 },
          { longitude: -106.43229, latitude: 23.2623 },
          { longitude: -106.43233, latitude: 23.2623 },
          { longitude: -106.43236, latitude: 23.26231 },
          { longitude: -106.43238, latitude: 23.26232 },
          { longitude: -106.43242, latitude: 23.26235 },
          { longitude: -106.43282, latitude: 23.26276 },
          { longitude: -106.4332, latitude: 23.26246 },
          { longitude: -106.43361, latitude: 23.26212 },
          { longitude: -106.434, latitude: 23.26181 },
          { longitude: -106.43437, latitude: 23.26151 }
  ];
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
    map: {
        height
    }
})
export default class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialRegion: {
                latitude: 23.2519726,
                longitude: -106.4079802,
                latitudeDelta: 0.0,
                longitudeDelta: 0.012
            },
            marginBottom: 1,
            currentAddress: ''
        }
    }
    state = { hackHeight: height }
    componentDidMount(){
        this.handleUserLocation();
        setTimeout(()=>this.setState({marginBottom : 0}),100)
        setTimeout( () => this.setState({ hackHeight: height+1}), 500);
        setTimeout( () => this.setState({ hackHeight: height}), 1000);
    }

    handleUserLocation =() =>{
        navigator.geolocation.getCurrentPosition(pos => {
            //alert(JSON.stringify(pos))
            this.map.animateToRegion({
                ...this.state.initialRegion,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
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
        return new Promise((resolve) => {
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
    onChangeValue = initialRegion =>{
        this.setState({
            initialRegion
        })
        const coords = {latitude:initialRegion.latitude, longitude:initialRegion.longitude};
        const promise1 = this.getAddressFromCoordinates(coords)
        promise1.then((value) => {
            alert(value);
          });
        
    }

    render(){
        return(
            <View style= {{ paddingBottom: this.state.hackHeight }}>
                <MapView
                provider={MapView.PROVIDER_GOOGLE}
                style = {{flex: 1, marginBottom: this.state.marginBottom}, styles.map}
                showsUserLocation = {true}
                showsMyLocationButton = {true}
                initialRegion = {this.state.initialRegion}
                onRegionChangeComplete = {this.onChangeValue}
                ref = {ref =>this.map = ref}
            >
                <MapView.Polyline
                coordinates = {ruta_dorados}
                strokeWidth = {2}
                strokeColor = "#E7173F"
                lineCap = "round"
                />
                
                
            </MapView>
            <View style={{top:'50%', left: '50%', marginLeft: -24, marginTop: -48, position:'absolute'}}>
                <Image style={{height: 48, width: 48}} source={require('../img/pin.png')}/>
            </View>
        </View>
        )
    }
    

}
