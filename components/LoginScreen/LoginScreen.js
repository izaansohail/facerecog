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
import { background } from '../constants';


export function loginScreen({ navigation }) {
    const [data, setData] = React.useState({
        username: 'admin',
        password: 'Password',
    });

    let [condition, setCondition] = React.useState({
        wrong: '',
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
        setCondition({
            ...condition,
            wrong: ''
        })
    }

    loginHandle = (userName, password) => {
        if (userName === 'admin' && password === 'Password') {
            clearState();
            navigation.navigate('Home');
            return;
        } else {
            setCondition({
                ...condition,
                wrong: 'Incorrect Username and Password'
            });
            console.log(condition);
            return;
        }
    };

    return ( 
        <View style = { styles.container } >
            <ImageBackground source= {background} style = { styles.backgroundImage}  >
        <Text style = { styles.logo } > Criminal Identification App </Text>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Username..."
        placeholderTextColor = "white"
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
        placeholderTextColor = "white"
        onChangeText = {
            (val) => handlePasswordChange(val)
        }
        value = {data.password}
        />  
        </View>
        <View>
        <Text>{condition.wrong}</Text>
        </View>

        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => {
                loginHandle(data.username, data.password);
            }
        } >
        <Text style = { styles.loginText } > LOGIN </Text>   
        </TouchableOpacity> 
        </ImageBackground>
        </View>
    );
}