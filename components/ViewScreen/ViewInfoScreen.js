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
import axios from 'axios';
import { SERVER_IP } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

export function ViewInfoScreen({route}) {

    let [citizen, setCitizen] = React.useState();
    var [responseImage, setResponseImage] = React.useState()

    React.useEffect(() => {
        axios.get("http://"+SERVER_IP
        +":5000/citizen", {
            params: {
                cnic: route.params.cnic
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
    }, []);


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
              style={{width: 200, height: 200, marginTop: 20}}
              resizeMode="contain"
            />
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

