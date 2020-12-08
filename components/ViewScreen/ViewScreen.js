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

export function ViewScreen({ navigation }){
    
 var[statecnic,setstatecnic] = React.useState({
        CNIC: '000'
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
        value={statecnic.CNIC}
        placeholderTextColor = "#003f5c" />
        </View>  

        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => navigation.push('ViewInfo', {cnic: statecnic.CNIC})
        } >
        <View>
        <Text > Fetch Data </Text>  
        </View>  
        </TouchableOpacity>  
        </View>
    );
}