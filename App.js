import 'react-native-gesture-handler';

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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loginScreen } from './components/LoginScreen/LoginScreen';
import { InsertDataScreen } from './components/InsertDataScreen/InsertDataScreen';
import { DeleteDataScreen } from './components/DeleteDataScreen/DeleteDataScreen';
import { UpdateDataScreen } from './components/UpdateDataScreen/UpdateDataScreen';
import { DataScreen } from './components/DataScreen/DataScreen';
import { MatchFaceScreen } from './components/MatchFaceScreen/MatchFaceScreen';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { ViewScreen } from './components/ViewScreen/ViewScreen';
import { styles } from './components/styles/styles';
import { ViewInfoScreen } from './components/ViewScreen/ViewInfoScreen';

const Stack = createStackNavigator();

function App() {
    return ( 
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name = "Login"
        component = { loginScreen }
        /> 
        <Stack.Screen name = "Home"
        component = { HomeScreen }
        /> 
        <Stack.Screen name = "Insert"
        component = { InsertDataScreen }
        /> 
        <Stack.Screen name = "Delete"
        component = { DeleteDataScreen }
        /> 
        <Stack.Screen name = "Update"
        component = { UpdateDataScreen }
        /> 
        <Stack.Screen name = "Match"
        component = { MatchFaceScreen }
        /> 
        <Stack.Screen name = "UpdateDetail"
        component = { DataScreen }
        />  
        <Stack.Screen name = "ViewData"
        component = { ViewScreen }
        /> 
        <Stack.Screen name = "ViewInfo"
        component = { ViewInfoScreen }
        />
        </Stack.Navigator> 
        </NavigationContainer>
    );
}

export default App;