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

export function UpdateDataScreen({ navigation }){
    
 var[statecnic,setstatecnic] = React.useState({
        CNIC: ''
    });

    let cnicchange = (val) => {
        setstatecnic({
            ...statecnic,
            CNIC: val,
        });
    };

    return ( <View style = { styles.container } >
        
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic..."
        onChangeText = {(val) => cnicchange(val)}
        placeholderTextColor = "#003f5c" />
        </View>  

        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => navigation.push('UpdateDetail', {cnic: statecnic.CNIC})
        } >
        <View>
        <Text > Update Data </Text>  
        </View>  
        </TouchableOpacity>  
        </View>
    );
}