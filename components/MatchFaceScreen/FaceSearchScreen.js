import * as React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput,
    Button,
    Image,
    ActivityIndicator
} from 'react-native';
import { styles } from '../styles/styles';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';

export function FaceSearchScreen({route}) {

    let [citizen, setCitizen] = React.useState();
    var [responseImage, setResponseImage] = React.useState()
    var [cnicFromVideo, setCnicFromVideo] = React.useState()


    React.useEffect(() => {
        axios.post("http://"+SERVER_IP+":5000/facematch", {
                "videoData": route.params.videoData
            }).then(res => {
                console.log("successfully send video");
                console.log(res.data)
                setCnicFromVideo({cnicValue: res.data})
                console.log("cnic state:  " + cnicFromVideo.cnicValue)
            }).catch(err => {
                console.log("sending failed:  " + err);
            });

        axios.get("http://"+SERVER_IP+":5000/facematch", {
                params: {
                    cnic: cnicFromVideo.cnicValue
                }
            }).then(res => {
                setCitizen(res.data.citizen);
                console.log(res.data.citizen.image1_name);
                setResponseImage({
                    Image1: "http://"+SERVER_IP+":5000"+res.data.citizen.image1_name,
                    Image2: "http://"+SERVER_IP+":5000"+res.data.citizen.image2_name,
                    Image3: "http://"+SERVER_IP+":5000"+res.data.citizen.image3_name
                })
            }).catch(err => {
                console.error(err);
            })
    },[])   



    if(citizen && responseImage) {
        console.log(responseImage.Image1);
        return (
        <ScrollView contentContainerStyle={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: '#003f5c'
        }}>
        <Text style ={{marginTop: 20}}>{citizen.name}</Text>  
        <Text>{citizen.age}</Text>  
        <Text>{citizen.cnic}</Text>  
        <Text>{citizen.address}</Text>  
        <Text>{citizen.phonenumber}</Text>  
        <Text>{citizen.gender}</Text>  
        <Text>{citizen.carreg}</Text>  
        <Text>{citizen.email}</Text>
        <View style={{ alignSelf: 'center', marginTop: 20}}>
            <Image
                source={{uri: responseImage.Image1}} 
                style={{width: 200, height: 200}}
                resizeMode="contain"
            />
            </View>
        <Image
                source={{uri: responseImage.Image2}}  
                style={{width: 200, height: 200, marginTop: 20}}
                resizeMode="contain"
            />
        <Image
                source={{uri: responseImage.Image3}}  
                style={{width: 200, height: 200, marginTop: 20, marginBottom: 20}}
                resizeMode="contain"
            />

        <TouchableOpacity style = { styles.loginBtn }
            onPress = {
                () => navigation.push('FaceSearch', {
                    videoData: videoResponse.response1})
         } >

        <View>
            <Text > Face Search </Text>  
        </View>  
        </TouchableOpacity>  


        </ScrollView>
        )
    } else {
        return (
        //  <Text>Loading, please wait</Text>
        <View style={[styles.container]}>
            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>

        );
    }
        
}