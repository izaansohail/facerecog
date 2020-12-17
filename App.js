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
import { FaceSearchScreen } from './components/MatchFaceScreen/FaceSearchScreen';
import { styles } from './components/styles/styles';
import { ViewInfoScreen } from './components/ViewScreen/ViewInfoScreen';

const Stack = createStackNavigator();

function App() {
    return ( 
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
                headerShown: true,
                headerTransparent:true
            }}>
        <Stack.Screen name = "Login"
        component = { loginScreen }
        options = {{title: ""}}
        /> 
        <Stack.Screen name = "Home"
        component = { HomeScreen }
        options = {{title: ""}}
        /> 
        <Stack.Screen name = "Insert"
        component = { InsertDataScreen }
         options = {{title: ""}}
        /> 
        <Stack.Screen name = "Delete"
        component = { DeleteDataScreen }
         options = {{title: ""}}
        /> 
        <Stack.Screen name = "Update"
        component = { UpdateDataScreen }
        options = {{title: ""}}
        /> 
        <Stack.Screen name = "Match"
        component = { MatchFaceScreen }
        options = {{title: ""}}
        /> 
        <Stack.Screen name = "UpdateDetail"
        component = { DataScreen }
        options = {{title: ""}}
        />  
        <Stack.Screen name = "ViewData"
        component = { ViewScreen }
        options = {{title: ""}}
        /> 
        <Stack.Screen name = "ViewInfo"
        component = { ViewInfoScreen }
        options = {{title: ""}}
        />
        <Stack.Screen name = "FaceSearch"
        component = { FaceSearchScreen }
        options = {{title: ""}}
        />
        </Stack.Navigator> 
        </NavigationContainer>
    );
}

export default App;