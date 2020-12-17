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
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';
import { background } from '../constants';

export function InsertDataScreen({ navigation }) {
    
    var [fileUri1, SetFileuri1] = React.useState({});
    var [fileUri2, SetFileuri2] = React.useState({});
    var [fileUri3, SetFileuri3] = React.useState({});
    var [responseImage, setResponseImage] = React.useState({
        Image1: '',
        Image2: '',
        Image3: '',
    })
    const [InsertData, setInsertData] = React.useState({
        ID: '',
        Name: '',
        Age: '',
        CNIC: '',
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
        setInsertData({
            ...InsertData,
            ID: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    NameChange = (val) => {
        setInsertData({
            ...InsertData,
            Name: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    AgeChange = (val) => {
        setInsertData({
            ...InsertData,
            Age: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    CNICChange = (val) => {
        setInsertData({
            ...InsertData,
            CNIC: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    PhNoChange = (val) => {
        setInsertData({
            ...InsertData,
            Phone_Number: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    AddressChange = (val) => {
        setInsertData({
            ...InsertData,
            Address: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    GenderChange = (val) => {
        setInsertData({
            ...InsertData,
            Gender: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    CarregChange = (val) => {
        setInsertData({
            ...InsertData,
            Carreg: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };
    EmailChange = (val) => {
        setInsertData({
            ...InsertData,
            email: val,
        });
        setCondition({
            ...condition,
            wrong: ''
        });
    };

    insertAllHandle = (Name, Age, cnic, Addr, PhNo, Gen, Carreg, Email) => {
        if(
            Name === "" ||
            Age === "" ||
            cnic.length < 13 ||
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
            axios.post("http://"+SERVER_IP+":5000/citizen", {
                "name": Name,
                "age": Age,
                "cnic": cnic,
                "address": Addr,
                "phonenumber": PhNo,
                "gender": Gen,
                "carreg": Carreg,
                "email": Email,
                "image1_name": responseImage.Image1.data,
                "image2_name": responseImage.Image2.data,
                "image3_name": responseImage.Image3.data
            }).then(res => {
                alert("successfully inserted");
            }).catch(err => {
                console.log(err);
                alert("Insertion Failed" + err);
            });
            navigation.navigate('Home');
            //alert(fileUri1+ fileUri2+ fileUri3);
            //console.log(responseImage.Image1);

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
        <View style = { styles.container }>
        <ImageBackground source= {background} style = { styles.backgroundImage}  >

        <Text style = { styles.Insertlogo } >Insert Data</Text>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "white"
        value={InsertData.Name}
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
        value={InsertData.Age}
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
        value={InsertData.CNIC}
        onChangeText = {
            (val) => CNICChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "white"
        value={InsertData.Address}
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
        value={InsertData.Phone_Number}
        onChangeText = {
            (val) => PhNoChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender(Male/Female)"
        placeholderTextColor = "white"
        value={InsertData.Gender}
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
        value={InsertData.Carreg}
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
        value={InsertData.email}
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

          <TouchableOpacity style={styles.insertBtn} 
            onPress={() => {insertAllHandle(
              InsertData.Name,
              InsertData.Age,
              InsertData.CNIC,
              InsertData.Address,
              InsertData.Phone_Number,
              InsertData.Gender,
              InsertData.Carreg,
              InsertData.email
              )}}
              >
            <Text style={styles.loginText}>INSERT</Text>
          </TouchableOpacity>


          </ImageBackground>
        </View>
        </ScrollView>
    );
}