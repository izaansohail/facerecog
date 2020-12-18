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
    ImageBackground
} from 'react-native';
import { styles } from '../styles/styles';
import { background } from '../constants';
import { image } from '../constants';


export function HomeScreen({ navigation }) {
    return (
        <View style = { styles.container } >
            <ImageBackground source= {background} style = { styles.backgroundImage}  >
        
            <TouchableOpacity style = { styles.logoutBtn }
        onPress = {
            () => navigation.navigate('Login')
        } >
        {/* <Text style={ styles.logoutText}> Logout </Text>   */}
        <Image source = {image} 
            style={styles.logoutText }
            resizeMode="center" />
        </TouchableOpacity>
        
        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Insert')
        } >
        <Text style={ styles.homeText}> Insert Data </Text>  
        </TouchableOpacity>

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Delete')
        } >
        <Text style={ styles.homeText}> Delete Data </Text>  
        </TouchableOpacity>

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Update')
        } >
        <Text style={ styles.homeText}> Update Data </Text>  
        </TouchableOpacity>

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('Match')
        }>
        <Text style={ styles.homeText}> Match Face </Text>  
        </TouchableOpacity>  

        <TouchableOpacity style = { styles.homeScreenBtn }
        onPress = {
            () => navigation.push('ViewData')
        }>
        <Text style={ styles.homeText}> View Data </Text>  
        </TouchableOpacity> 
        </ImageBackground>
        </View>
    );
}
