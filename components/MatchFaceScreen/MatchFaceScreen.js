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
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';
import { background } from '../constants';

export function MatchFaceScreen({navigation}) {

    var[videoData, setVideoData] = React.useState({});
    var[videoResponse, setVideoResponse] = React.useState({
        response1: ''
    });

    const chooseVideo = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'video',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                //SetFileuri(response.uri) //update state to update Image
                //SetFileuri1({ fileUri1: response.uri });
                // setResponseImage({
                //     Image1: response
                // })
                setVideoData({videoData: response.uri});
                RNFS.readFile(response.uri, 'base64').then(res => {
                    setVideoResponse({
                        ...videoResponse,
                        response1: res,
                    });
                });
                // setVideoResponse({
                //     ...videoResponse,
                //     response1: response.data,
                // })
                //console.log("def" + videoResponse.response1);
            }
        });
    };


    if (videoData.videoData){
    return ( 

        

        <View style = { styles.container } >

        <ImageBackground source= {background} style = { styles.backgroundImage}>
        <Text style = { styles.Insertlogo } >Match Face</Text>
        
        <View style = {{height: 300,
                width: 250,
                alignSelf: 'center',}}>
        <Video source={{uri: videoData.videoData}}   // Can be a URL or a local file.
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
        <View style={{ alignSelf: 'center', marginTop: 20}}>
          {/* <Image
              style={{ height: 100, width: 80, borderRadius: 0, }}
              source={{uri: videoData.videoData}} 
            /> */}
            
            <TouchableOpacity /*style={styles.addPictureIcon}*/ onPress={chooseVideo}>
            {/* <Icon name="camera" size={20} /> */}
            <Text>Choose Video</Text>
            </TouchableOpacity>
          </View>  

        <TouchableOpacity style = { styles.loginBtn }
        onPress = {
            () => navigation.push('FaceSearch', {
                videoUri: videoData.videoData,
                videoData: videoResponse.response1})
        } >
        <View>
        <Text > Face Search </Text>  
        </View>  
        </TouchableOpacity>  
        </ImageBackground>
        </View>
    )
        
    }

        else{

            return(
            <View style = { styles.container } >
            <ImageBackground source= {background} style = { styles.backgroundImage}>
        <Text style = { styles.Insertlogo } >Match Face</Text>
        
        {/* <View style = {{height: 150,
                width: 200,
                alignSelf: 'center',}}>
        <Video source={{uri: videoData.videoData}}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError} 
                controls= "true" 
                resizeMode="contain"
                         // Callback when video cannot be loaded
                style={{position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                
                }} />

        </View> */}
        <View style={{ alignSelf: 'center', marginTop: 20}}>
          {/* <Image
              style={{ height: 100, width: 80, borderRadius: 0, }}
              source={{uri: videoData.videoData}} 
            /> */}
            
            <TouchableOpacity /*style={styles.addPictureIcon}*/ onPress={chooseVideo}>
            {/* <Icon name="camera" size={20} /> */}
            <Text>Choose Video</Text>
            </TouchableOpacity>
          </View>  

        <TouchableOpacity style = { styles.loginBtn }>
        <View>
        <Text style={styles.loginText}> Face Search </Text>  
        </View>  
        </TouchableOpacity> 
        </ImageBackground>
        </View>
        
    )

}
}
