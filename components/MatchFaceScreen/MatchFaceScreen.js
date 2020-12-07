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

export function MatchFaceScreen() {
    return ( 
    <View style = {
            { flex: 1, alignItems: 'center', justifyContent: 'center' }
        } >
        <Text> Match Face Screen </Text>  
        </View>
    );
}