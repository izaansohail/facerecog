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
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { styles } from '../styles/styles';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';
import { background } from '../constants';
import { readDir } from 'react-native-fs';

export function FaceSearchScreen({route}) {

    let [citizen, setCitizen] = React.useState();
    var [responseImage, setResponseImage] = React.useState();
     
    React.useEffect(() => {
        axios.post("http://"+SERVER_IP+":5000/facematch", {
                "videoData": route.params.videoData
            }).then(res => {
                console.log("successfully send video");
                console.log(res.data.Cnic);
                axios.get("http://"+SERVER_IP+":5000/citizen", {
                    params: {
                        cnic: res.data.Cnic
                    }
                }).then(res => {
                    setCitizen(res.data.citizen);
                    setResponseImage({
                        Image1: "http://"+SERVER_IP+":5000"+res.data.citizen.image1_name,
                        Image2: "http://"+SERVER_IP+":5000"+res.data.citizen.image2_name,
                        Image3: "http://"+SERVER_IP+":5000"+res.data.citizen.image3_name
                    })
                }).catch(err => {
                    console.error(err);
                })
            }).catch(err => {
                console.log("sending failed:  " + err);
            });

        
    },[])


    if(citizen && responseImage) {
        console.log("here:" + responseImage.Image1);
        return (
        <ScrollView>
           <View style = { styles.container } > 

        <ImageBackground source= {background} style = { styles.backgroundImage}  >

            

        <Text style = { styles.Insertlogo } >Challan</Text>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "white"
        value={citizen.name}
        disabled = {true}
        />  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age..."
        placeholderTextColor = "white"
        value={citizen.age}
        disabled = {true}
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "CNIC..."
        placeholderTextColor = "white"
        value={citizen.cnic}
        disabled = {true}
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "white"
        value={citizen.address}
        disabled = {true}
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number..."
        placeholderTextColor = "white"
        value={citizen.phonenumber}
        disabled = {true}
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender..."
        placeholderTextColor = "white"
        value={citizen.gender}
        disabled = {true}
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Car Reg no..."
        placeholderTextColor = "white"
        value={citizen.carreg}
        disabled = {true}
        /> 
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email..."
        placeholderTextColor = "white"
        value={citizen.email}
        disabled = {true}
        />
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Overspeed Challan = 500 PKR"
        placeholderTextColor = "red"
        disabled = {true}
        />
        </View>

        <Image
              source={{uri: responseImage.Image1}} 
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
        <Image
              source={{uri: responseImage.Image2}}  
              style={{width: 200, height: 200, marginTop: 20}}
              resizeMode="contain"
            />
        <Image
              source={{uri: responseImage.Image3}}  
              style={{width: 200, height: 200, marginTop: 20}}
              resizeMode="contain"
            />
        </ImageBackground>
        </View>
        </ScrollView>
        )
    } else {
        return (
        <View style={[styles.container]}>
            <ImageBackground source= {background} style = { styles.backgroundImage}  >

            <Text style = { styles.Insertlogo } >View Data</Text>
            <ActivityIndicator />
            <ActivityIndicator size="large" color="white"/>
            </ImageBackground>
        </View>

        );
    }  
}