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

export function UpdateDataScreen({ navigation }) {
    return ( <View style = { styles.container } >
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic..."
        placeholderTextColor = "#003f5c" />
        </View>  
        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => navigation.push('UpdateDetail')
        } >
        <View>
        <Text > Update Data </Text>  
        </View>  
        </TouchableOpacity>  
        </View>
    );
}