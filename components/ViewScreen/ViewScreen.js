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
} from 'react-native';
import { styles } from '../styles/styles';
import { background } from '../constants';

export function ViewScreen({ navigation }){
    
 var[statecnic,setstatecnic] = React.useState({
        CNIC: ''
    });

    let [condition, setCondition] = React.useState({
        wrong: '',
    });

    let cnicchange = (val) => {
        setstatecnic({
            ...statecnic,
            CNIC: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    clearState = () => {
        setstatecnic({
            ...statecnic,
            CNIC: '',
        });
    };

    insertAllHandle = (Cnic) => {
        if(Cnic.length < 13) {
            setCondition({
                ...condition,
                wrong: 'Invalid Entry! Please Re-enter'
            });
        }
        else { 
            setCondition({
                ...condition,
                wrong: ''
            });
            clearState();
            navigation.push('ViewInfo', {cnic: statecnic.CNIC});
        }
    };

    return ( <View style = { styles.container } >

        <ImageBackground source= {background} style = { styles.backgroundImage}  >

        <Text style = { styles.Insertlogo } >View Data</Text>
        
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic..."
        keyboardType = "number-pad"
        maxLength = {13}
        onChangeText = {(val) => cnicchange(val)}
        value={statecnic.CNIC}
        placeholderTextColor = "white" />
        </View> 

        <View >
        <Text style = {styles.wronger}>{condition.wrong}</Text>
        </View> 

        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => {insertAllHandle(statecnic.CNIC)}
        } >
        <View>
        <Text > Fetch Data </Text>  
        </View>  
        </TouchableOpacity>  
        </ImageBackground>
        </View>
    );
}