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
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { SERVER_IP } from '../constants';
import axios from 'axios';

export function DataScreen() {


    var [fileUri1, SetFileuri1] = React.useState({});
    var [fileUri2, SetFileuri2] = React.useState({});
    var [fileUri3, SetFileuri3] = React.useState({});
    const [UpdateData, setUpdateData] = React.useState({
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
        setUpdateData({
            ...UpdateData,
            ID: val,
        });
    };

    NameChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Name: val,
        });
    };
    AgeChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Age: val,
        });
    };
    CNICChange = (val) => {
        setUpdateData({
            ...UpdateData,
            CNIC: val,
        });
    };
    PhNoChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Phone_Number: val,
        });
    };
    AddressChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Address: val,
        });
    };
    GenderChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Gender: val,
        });
    };
    CarregChange = (val) => {
        setUpdateData({
            ...UpdateData,
            Carreg: val,
        });
    };
    EmailChange = (val) => {
        setUpdateData({
            ...UpdateData,
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
        value={UpdateData.ID}
        onChangeText = {
            (val) => IDChange(val)
        }/>  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Name..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.Name}
        onChangeText = {
            (val) => NameChange(val)
        }

        />  
        </View>
        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Age..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.Age}
        onChangeText = {
            (val) => AgeChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "CNIC..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.CNIC}
        onChangeText = {
            (val) => CNICChange(val)
        }
        />  
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Address..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.Address}
        onChangeText = {
            (val) => AddressChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Phone Number..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.Phone_Number}
        onChangeText = {
            (val) => PhNoChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Gender..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.Gender}
        onChangeText = {
            (val) => GenderChange(val)
        }
        />   
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "Car Reg no..."
        placeholderTextColor = "#003f5c"
        value={UpdateData.Carreg}
        onChangeText = {
            (val) => CarregChange(val)
        }
        /> 
        </View>

        <View style = { styles.inputView } >
        <TextInput style = { styles.inputText }
        placeholder = "email..."
        placeholderTextColor = "#003f5c"
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

          <TouchableOpacity style={styles.loginBtn} 
            onPress={() => {insertAllHandle(
              UpdateData.ID,
              UpdateData.Name,
              UpdateData.Age,
              UpdateData.CNIC,
              UpdateData.Address,
              UpdateData.Phone_Number,
              UpdateData.Gender,
              UpdateData.Carreg,
              UpdateData.Email
              )}}
              >
            <Text style={styles.loginText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>



        // <ScrollView>
        // <View style = { styles.container } >
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "Name"
        // placeholderTextColor = "#003f5c" 

        // />
        // </View> 
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "Age"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "cnic"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "Address"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "Phone Number"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "gender"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "car registration number"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <View style = { styles.inputView } >
        // <TextInput style = { styles.inputText }
        // placeholder = "email"
        // placeholderTextColor = "#003f5c" />
        // </View>  
        // <TouchableOpacity style = { styles.loginBtn } >
        // <View >
        // <Text > Implement </Text>  
        // </View>  
        // </TouchableOpacity>  
        // </View>  
        // </ScrollView>
    );
}