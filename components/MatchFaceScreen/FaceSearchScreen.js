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
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';

export function FaceSearchScreen({route}) {

    
    React.useEffect(() => {
    axios.post("http://"+SERVER_IP+":5000/facematch", {
            "videoData": route.params.videoData
        }).then(res => {
            console.log("successfully send video");
            console.log(res.data)
        }).catch(err => {
            console.log("sending failed:  " + err);
        });
    },[])

    return ( 

        <View style = { styles.container } >
        
        <View style = {{height: 300,
                width: 250,
                alignSelf: 'center',}}>
        <Video source={{uri: route.params.videoUri}}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError} 
                controls= {true} 
                resizeMode="contain"
                style={{position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                
                }} />

        </View>
        
        </View>
    );
        
}