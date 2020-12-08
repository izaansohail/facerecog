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
} from 'react-native';
import { styles } from '../styles/styles';
import { SERVER_IP } from '../constants';
import axios from 'axios';

export function DeleteDataScreen() {

    var [cnicState, setCnicState] = React.useState({
        cnic: '',
    });

    cnicHandle = (val) => {
        setCnicState({
            ...cnicState,
            cnic: val,
        });
    };

    insertAllHandle = (CNIC) => {
        console.log(CNIC);
        axios.delete("http://"+SERVER_IP+":5000/citizen", {
            data : {"cnic": CNIC}
        }).then(res => {
            alert("successfully deleted");
        }).catch(err => {
            console.log(err);
            alert("unsuccessful" + err);
        });
         //alert(fileUri1+ fileUri2+ fileUri3);
         //console.log(fileUri1);
         //console.log(CNIC);
    };


    return ( 
    <View style = { styles.container } >
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic..."
        onChangeText = {(val) => cnicHandle(val)}
        placeholderTextColor = "#003f5c" />
        </View>   
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "re-enter cnic..."
        placeholderTextColor = "#003f5c" />
        </View>   

        <TouchableOpacity style = { styles.loginBtn } 
         onPress={() => {insertAllHandle(
            cnicState.cnic
         )}}>
        <View >
        <Text > Delete Data </Text>   
        </View>   
        </TouchableOpacity>
        </View>
    );
}