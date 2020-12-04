import * as  React from 'react';

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


export function HomeScreen({ navigation }) {
    return (
        <View style = { styles.container } >
        
        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Insert')
        } >
        <Text > Insert Data </Text>  
        </TouchableOpacity>

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Delete')
        } >
        <Text > Delete Data </Text>  
        </TouchableOpacity>

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Update')
        } >
        <Text > Update Data </Text>  
        </TouchableOpacity>

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Match')
        }>
        <Text > Match Face </Text>  
        </TouchableOpacity>  

        </View>
    );
}
