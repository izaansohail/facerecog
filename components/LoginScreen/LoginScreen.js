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


export function loginScreen({ navigation }) {
    const [data, setData] = React.useState({
        username: 'admin',
        password: 'Password',
    });

    textInputChange = (val) => {
        setData({
            ...data,
            username: val,
        });
    };

    handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

    clearState = () => {
        setData({
            ...data,
            username: '',
            password: ''
        });
    }

    loginHandle = (userName, password) => {
        if (userName === 'admin' && password === 'Password') {
            clearState();
            navigation.navigate('Home');
            return;
        } else {
            return;
        }
    };

    return ( 
        <View style = { styles.container } >
        <Text style = { styles.logo } > Criminal Identification App </Text>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Username..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => textInputChange(val)
        }
        value = {data.username}
        />
        </View> 
        <View style = { styles.inputView } >
        <TextInput secureTextEntry = { true }
        style = { styles.inputText }
        placeholder = "Password..."
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (val) => handlePasswordChange(val)
        }
        value = {data.password}
        />  
        </View>

        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => {
                loginHandle(data.username, data.password);
            }
        } >
        <Text style = { styles.loginText } > LOGIN </Text>   
        </TouchableOpacity> 
        </View>
    );
}