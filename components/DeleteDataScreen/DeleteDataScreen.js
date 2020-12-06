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

export function DeleteDataScreen() {
    return ( 
    <View style = { styles.container } >
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic..."
        placeholderTextColor = "#003f5c" />
        </View>   
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "re-enter cnic..."
        placeholderTextColor = "#003f5c" />
        </View>   
        <TouchableOpacity style = { styles.loginBtn } >

        <View >
        <Text > Delete Data </Text>   
        </View>   
        </TouchableOpacity>
        </View>
    );
}