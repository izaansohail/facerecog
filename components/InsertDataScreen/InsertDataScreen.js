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
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { SERVER_IP } from '../constants';

export function InsertDataScreen({ navigation }) {
    
    var [fileUri1, SetFileuri1] = React.useState({});
    var [fileUri2, SetFileuri2] = React.useState({});
    var [fileUri3, SetFileuri3] = React.useState({});
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

    IDChange = (val) => {
        setInsertData({
            ...InsertData,
            ID: val,
        });
    };

    NameChange = (val) => {
        setInsertData({
            ...InsertData,
            Name: val,
        });
    };
    AgeChange = (val) => {
        setInsertData({
            ...InsertData,
            Age: val,
        });
    };
    CNICChange = (val) => {
        setInsertData({
            ...InsertData,
            CNIC: val,
        });
    };
    PhNoChange = (val) => {
        setInsertData({
            ...InsertData,
            Phone_Number: val,
        });
    };
    AddressChange = (val) => {
        setInsertData({
            ...InsertData,
            Address: val,
        });
    };
    GenderChange = (val) => {
        setInsertData({
            ...InsertData,
            Gender: val,
        });
    };
    CarregChange = (val) => {
        setInsertData({
            ...InsertData,
            Carreg: val,
        });
    };
    EmailChange = (val) => {
        setInsertData({
            ...InsertData,
            email: val,
        });
    };

    insertAllHandle = (Id, Name, Age, cnic, Addr, PhNo, Gen, Carreg, Email) => {
        console.log("a")
        axios.post("http://"+SERVER_IP+":5000/citizen", {
            "name": Name,
            "age": Age,
            "cnic": cnic,
            "address": Addr,
            "phonenumber": PhNo,
            "gender": Gen,
            "carreg": Carreg,
            "email": Email,
            "image1_name": fileUri1.fileUri1,
            "image2_name": fileUri2.fileUri2,
            "image3_name": fileUri3.fileUri3
        }).then(res => {
            alert("successfully inserted");
        }).catch(err => {
            console.log(err);
            alert("error bois" + err);
        });
         //alert(fileUri1+ fileUri2+ fileUri3);
         //console.log(fileUri1);
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
            }
        });
    };

    return ( 
    <ScrollView>
        <View style = { styles.container } >
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "ID..."
        placeholderTextColor = "#003f5c"
        value={InsertData.ID}
        onChangeText = {
            (val) => IDChange(val)
        }/>  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Name}
        onChangeText = {
            (val) => NameChange(val)
        }

        />  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Age}
        onChangeText = {
            (val) => AgeChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "CNIC..."
        placeholderTextColor = "#003f5c"
        value={InsertData.CNIC}
        onChangeText = {
            (val) => CNICChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Address}
        onChangeText = {
            (val) => AddressChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Phone_Number}
        onChangeText = {
            (val) => PhNoChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Gender}
        onChangeText = {
            (val) => GenderChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Car Reg no..."
        placeholderTextColor = "#003f5c"
        value={InsertData.Carreg}
        onChangeText = {
            (val) => CarregChange(val)
        }
        /> 
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email..."
        placeholderTextColor = "#003f5c"
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

          <TouchableOpacity style={styles.loginBtn} 
            onPress={() => {insertAllHandle(
              InsertData.ID,
              InsertData.Name,
              InsertData.Age,
              InsertData.CNIC,
              InsertData.Address,
              InsertData.Phone_Number,
              InsertData.Gender,
              InsertData.Carreg,
              InsertData.Email
              )}}
              >
            <Text style={styles.loginText}>INSERT</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    );
}