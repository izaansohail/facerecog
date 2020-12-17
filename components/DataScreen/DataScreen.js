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
    ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { SERVER_IP } from '../constants';
import axios from 'axios';
import { background } from '../constants';

export function DataScreen({route, navigation}) {

    var [fileUri1, SetFileuri1] = React.useState({});
    var [fileUri2, SetFileuri2] = React.useState({});
    var [fileUri3, SetFileuri3] = React.useState({});
    var [responseImage, setResponseImage] = React.useState({
        Image1: '',
        Image2: '',
        Image3: '',
    })
    const [UpdateData, setUpdateData] = React.useState({
        ID: '',
        Name: '',
        Age: '',
        CNIC: route.params.cnic,
        Address: '',
        Phone_Number: '',
        Gender: '',
        Carreg: '',
        email: '',
        image1: '',
        image2: '',
        image3: '',
    });

    let [condition, setCondition] = React.useState({
        wrong: '',
    });

    IDChange = (val) => {
        setUpdateData({
            ...UpdateData,
            ID: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    NameChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Name: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    AgeChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Age: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    PhNoChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Phone_Number: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    AddressChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Address: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    GenderChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Gender: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    CarregChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Carreg: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    EmailChange = (val) => {
        setUpdateData({
            ...UpdateData,
            email: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    insertAllHandle = (Name, Age, Addr, PhNo, Gen, Carreg, Email) => {
        if(
            Name === "" ||
            Age === "" ||
            Addr == "" ||
            PhNo.length < 11 ||
            (Gen !== "Male" && Gen !== "Female") ||
            Carreg.length < 7 ||
            Email === "" ||
            responseImage.Image1.data === "" ||
            responseImage.Image2.data === "" ||
            responseImage.Image3.data === "" 
        ) {
            setCondition({
                ...condition,
                wrong: 'Invalid Entry! Please Re-enter'
            });
        }
        else {
            console.log(Object.keys(responseImage.Image1))
            axios.put("http://"+SERVER_IP+":5000/citizen", {
                "name": Name,
                "age": Age,
                "cnic": route.params.cnic,
                "address": Addr,
                "phonenumber": PhNo,
                "gender": Gen,
                "carreg": Carreg,
                "email": Email,
                "image1_name": responseImage.Image1.data,
                "image2_name": responseImage.Image2.data,
                "image3_name": responseImage.Image3.data
            }).then(res => {
                alert("successfully updated");
            }).catch(err => {
                console.log(err);
                alert("unsuccessful" + err);
            });
            //alert(fileUri1+ fileUri2+ fileUri3);
            //console.log(fileUri1);
            console.log(route.params);
            navigation.navigate('Home');
        }
    };

    const chooseImage1 = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'photo',
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
                SetFileuri1({ fileUri1: response.uri });
                setResponseImage({
                    ...responseImage,
                    Image1: response
                })
                setCondition({
                    ...condition,
                    wrong: ''
                });
            }
        });
    };

    const chooseImage2 = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'photo',
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
                SetFileuri2({ fileUri2: response.uri });
                setResponseImage({
                    ...responseImage,
                    Image2: response
                })
                setCondition({
                    ...condition,
                    wrong: ''
                });
            }
        });
    };

    const chooseImage3 = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'photo',
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
                SetFileuri3({ fileUri3: response.uri });
                setResponseImage({
                    ...responseImage,
                    Image3: response
                })
                setCondition({
                    ...condition,
                    wrong: ''
                });
            }
        });
    };



    return ( 
        <ScrollView>
        <View style = { styles.container } >

        <ImageBackground source= {background} style = { styles.backgroundImage}  >

        <Text style = { styles.Insertlogo } >Update Data</Text>
        
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "white"
        value={UpdateData.Name}
        autoCapitalize = "words"
        maxLength = {20}
        onChangeText = {
            (val) => NameChange(val)
        }

        />  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age..."
        placeholderTextColor = "white"
        keyboardType = "number-pad"
        value={UpdateData.Age}
        onChangeText = {
            (val) => AgeChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "CNIC..."
        placeholderTextColor = "white"
        keyboardType = "number-pad"
        maxLength = {13}
        value={UpdateData.CNIC}
        disabled = {true}
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "white"
        value={UpdateData.Address}
        onChangeText = {
            (val) => AddressChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number..."
        placeholderTextColor = "white"
        maxLength = {13}
        keyboardType = "phone-pad"
        value={UpdateData.Phone_Number}
        onChangeText = {
            (val) => PhNoChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender..."
        placeholderTextColor = "white"
        value={UpdateData.Gender}
        onChangeText = {
            (val) => GenderChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Car Reg no..."
        placeholderTextColor = "white"
        maxLength = {7}
        autoCapitalize = "characters"
        value={UpdateData.Carreg}
        onChangeText = {
            (val) => CarregChange(val)
        }
        /> 
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email..."
        placeholderTextColor = "white"
        keyboardType = "email-address"
        value={UpdateData.email}
        onChangeText = {
            (val) => EmailChange(val)
        }
        />
        </View>

        <View style={{ alignSelf: 'center', marginTop: 10}}>
            <Image
              style={{ height: 100, width: 80, borderRadius: 0, }}
              source={{uri: fileUri1.fileUri1}} 
            />
            <TouchableOpacity /*style={styles.addPictureIcon}*/ onPress={chooseImage1}>
            {/* <Icon name="camera" size={20} /> */}
            <Text>Choose Image 1</Text>
            {/* <Text>{fileUri1}</Text> */}
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center', marginTop: 20}}>
          <Image
              style={{ height: 100, width: 80, borderRadius: 0, }}
              source={{uri: fileUri2.fileUri2}} 
            />
            <TouchableOpacity /*style={styles.addPictureIcon}*/ onPress={chooseImage2}>
            {/* <Icon name="camera" size={20} /> */}
            <Text>Choose Image 2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center', marginTop: 20}}>
          <Image
              style={{ height: 100, width: 80, borderRadius: 0, }}
              source={{uri: fileUri3.fileUri3}} 
            />
            <TouchableOpacity /*style={styles.addPictureIcon}*/ onPress={chooseImage3}>
            {/* <Icon name="camera" size={20} /> */}
            <Text>Choose Image 3</Text>
            </TouchableOpacity>
          </View>

          <View >
        <Text style = {styles.wronger}>{condition.wrong}</Text>
        </View>

          <TouchableOpacity style={styles.loginBtn} 
            onPress={() => {insertAllHandle(
              UpdateData.Name,
              UpdateData.Age,
              UpdateData.Address,
              UpdateData.Phone_Number,
              UpdateData.Gender,
              UpdateData.Carreg,
              UpdateData.email
              )}}
              >
            <Text style={styles.loginText}>UPDATE</Text>
          </TouchableOpacity>

          </ImageBackground>
        </View>
        </ScrollView>
    );
}