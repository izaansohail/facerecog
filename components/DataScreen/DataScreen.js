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
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
export function DataScreen() {
    return ( 
        <ScrollView>
        <View style = { styles.container } >
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name"
        placeholderTextColor = "#003f5c" 

        />
        </View> 
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age"
        placeholderTextColor = "#003f5c" />
        </View>  
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "cnic"
        placeholderTextColor = "#003f5c" />
        </View>  
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address"
        placeholderTextColor = "#003f5c" />
        </View>  
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number"
        placeholderTextColor = "#003f5c" />
        </View>  
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "gender"
        placeholderTextColor = "#003f5c" />
        </View>  
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "car registration number"
        placeholderTextColor = "#003f5c" />
        </View>  
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email"
        placeholderTextColor = "#003f5c" />
        </View>  
        <TouchableOpacity style = { styles.loginBtn } >
        <View >
        <Text > Implement </Text>  
        </View>  
        </TouchableOpacity>  
        </View>  
        </ScrollView>
    );
}