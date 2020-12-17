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
    ImageBackground
} from 'react-native';
import { styles } from '../styles/styles';
import { SERVER_IP } from '../constants';
import axios from 'axios';
import { background } from '../constants'

export function DeleteDataScreen() {

    var [cnicState, setCnicState] = React.useState({
        cnic1: '',
        cnic2: '',
    });

    let [condition, setCondition] = React.useState({
        wrong: '',
    });

    cnicHandle1 = (val) => {
        setCnicState({
            ...cnicState,
            cnic1: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    cnicHandle2 = (val) => {
        setCnicState({
            ...cnicState,
            cnic2: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    insertAllHandle = (CNIC1, CNIC2) => {
        if (CNIC1.length != 13 || CNIC2.length != 13){
            setCondition({
                ...condition,
                wrong: 'Invalid CNIC!'
            });
        }
        else if(CNIC1 === CNIC2 ){
            console.log(CNIC1);
            axios.delete("http://"+SERVER_IP+":5000/citizen", {
                data : {"cnic": CNIC1}
            }).then(res => {
                alert("successfully deleted");
            }).catch(err => {
                console.log(err);
                alert("unsuccessful" + err);
            });
            //alert(fileUri1+ fileUri2+ fileUri3);
            //console.log(fileUri1);
            //console.log(CNIC);
        }
        else {
            setCondition({
                ...condition,
                wrong: 'CNIC does not match'
            });
        }
    };


    return ( 
    <View style = { styles.container } >

        <ImageBackground source= {background} style = { styles.backgroundImage}>
        <Text style = { styles.Insertlogo } >Delete Data</Text>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic..."
        keyboardType = "number-pad"
        maxLength = {13}
        onChangeText = {(val) => cnicHandle1(val)}
        placeholderTextColor = "white" />
        </View>   
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "re-enter cnic..."
        keyboardType = "number-pad"
        maxLength = {13}
        onChangeText = {(val) => cnicHandle2(val)}
        placeholderTextColor = "white" />
        </View>   

        <View >
        <Text style = {styles.wronger}>{condition.wrong}</Text>
        </View>

        <TouchableOpacity style = { styles.loginBtn } 
         onPress={() => {insertAllHandle(
            cnicState.cnic1,
            cnicState.cnic2,
         )}}>
        <View >
        <Text style={styles.loginText}> Delete Data </Text>   
        </View>   
        </TouchableOpacity>

        </ImageBackground>

        </View>
    );
}